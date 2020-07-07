import { Inject } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export abstract class FirestoreService<T> {
  protected abstract basePath: string;

  constructor(protected firestore: AngularFirestore) {}

  doc$(id: string): Observable<T> {
    return this.firestore
      .doc<T>(`${this.basePath}/${id}`)
      .snapshotChanges()
      .pipe(
        map((action) => {
          const data: T = action.payload.data() as T;
          const id = action.payload.id;
          return { id, ...data };
        }),
        map(
          (r): T => {
            return this.mapTimestamp(r);
          }
        ),
        tap((r) => {
          if (!environment.production) {
            console.groupCollapsed(`Firestore Streaming [${this.basePath}] [doc$] ${id}`);
            console.log(r);
            console.groupEnd();
          }
        })
      );
  }

  collection$(queryFn?: QueryFn): Observable<T[]> {
    return this.firestore
      .collection(`${this.basePath}`, queryFn)
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data: T = a.payload.doc.data() as T;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }),
        map((r): T[] => {
          return r.map((i) => this.mapTimestamp(i));
        }),
        tap((r) => {
          if (!environment.production) {
            console.groupCollapsed(`Firestore Streaming [${this.basePath}] [collection$]`);
            console.table(r);
            console.groupEnd();
          }
        })
      );
  }

  private mapTimestamp(item: any): T {
    Object.keys(item)
      .filter((key) => item[key] instanceof Timestamp)
      .forEach((key) => (item[key] = item[key].toDate()));
    return item as T;
  }
}

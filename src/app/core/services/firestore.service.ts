import { Inject } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export abstract class FirestoreService<T> {
  protected abstract basePath: string;

  constructor(protected firestore: AngularFirestore) {}

  doc$(id: string): Observable<T> {
    return this.firestore
      .doc<T>(`${this.basePath}/${id}`)
      .valueChanges()
      .pipe(
        tap((r) => {
          if (!environment.production) {
            console.groupCollapsed(
              `Firestore Streaming [${this.basePath}] [doc$] ${id}`
            );
            console.log(r);
            console.groupEnd();
          }
        })
      );
  }

  collection$(queryFn?: QueryFn): Observable<T[]> {
    return this.firestore
      .collection<T>(`${this.basePath}`, queryFn)
      .valueChanges()
      .pipe(
        tap((r) => {
          if (!environment.production) {
            console.groupCollapsed(
              `Firestore Streaming [${this.basePath}] [collection$]`
            );
            console.table(r);
            console.groupEnd();
          }
        })
      );
  }
}

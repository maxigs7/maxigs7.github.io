import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { IProfile } from 'src/app/models/index';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends FirestoreService<IProfile> {
  protected basePath: string = 'profile';

  constructor(firestore: AngularFirestore) {
    super(firestore);
  }
}

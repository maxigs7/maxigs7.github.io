import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { IExperience } from 'src/app/models/index';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService extends FirestoreService<IExperience> {
  protected basePath: string = 'experiences';

  constructor(firestore: AngularFirestore) {
    super(firestore);
  }
}

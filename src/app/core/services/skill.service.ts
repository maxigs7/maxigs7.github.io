import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { ISkill } from 'src/app/models/index';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SkillService extends FirestoreService<ISkill> {
  protected basePath: string = 'skills';

  constructor(firestore: AngularFirestore) {
    super(firestore);
  }
}

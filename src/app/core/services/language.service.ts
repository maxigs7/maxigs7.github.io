import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { ILanguage } from 'src/app/models/index';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LanguageService extends FirestoreService<ILanguage> {
  protected basePath: string = 'languages';

  constructor(firestore: AngularFirestore) {
    super(firestore);
  }
}

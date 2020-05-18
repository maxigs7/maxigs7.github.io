import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { ICertificate } from 'src/app/models/index';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CertificateService extends FirestoreService<ICertificate> {
  protected basePath: string = 'certificates';

  constructor(firestore: AngularFirestore) {
    super(firestore);
  }
}

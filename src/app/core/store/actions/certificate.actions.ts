import { createAction, props } from '@ngrx/store';
import { ICertificate } from 'src/app/models/index';

const loadCertificates = createAction('[Certificate] Load Certificates');
const loadCertificatesSuccess = createAction(
  '[Certificate] Load Certificates Success',
  props<{ certificates: ICertificate[] }>()
);
const loadCertificatesFailure = createAction('[Certificate] Load Certificates Failure', props<{ error: any }>());

export const CertificateActions = { loadCertificates, loadCertificatesSuccess, loadCertificatesFailure };

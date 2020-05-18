import { createAction, props } from '@ngrx/store';
import { ICertificate } from 'src/app/models/index';

export const LOAD_CERTIFICATES = '[Certificate] Load Certificates';
export const LOAD_CERTIFICATES_SUCCESS =
  '[Certificate] Load Certificates Success';
export const LOAD_CERTIFICATES_FAILURE =
  '[Certificate] Load Certificates Failure';

export const loadCertificates = createAction(LOAD_CERTIFICATES);

export const loadCertificatesSuccess = createAction(
  LOAD_CERTIFICATES_SUCCESS,
  props<{ data: ICertificate[] }>()
);

export const loadCertificatesFailure = createAction(
  LOAD_CERTIFICATES_FAILURE,
  props<{ error: any }>()
);

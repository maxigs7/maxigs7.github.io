import { createSelector } from '@ngrx/store';
import { IAppState, ICertificateState } from '../states/index';

const _selectCertificates = (state: IAppState) => state.certificate;

export const selectCertificates = createSelector(
  _selectCertificates,
  (state: ICertificateState) => state.certificates
);

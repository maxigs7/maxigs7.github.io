import { createSelector } from '@ngrx/store';
import { IAppState, ICertificateState } from '../states/index';

const _selectCertificates = (state: IAppState) => state.certificate;

const selectCertificates = createSelector(_selectCertificates, (state: ICertificateState) => state.certificates);
const selectCertificatesPending = createSelector(_selectCertificates, (state) => state.pending);
const selectCertificatesError = createSelector(_selectCertificates, (state) => state.error);

export const CertificateSelectors = { selectCertificates, selectCertificatesPending, selectCertificatesError };

import { createReducer, on, Action } from '@ngrx/store';
import { initialCertificateState, ICertificateState } from '../states/index';
import { CertificateActions } from '../actions/index';

export const certificateFeatureKey = 'certificate';

const _reducer = createReducer(
  initialCertificateState,
  on(CertificateActions.loadCertificates, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(CertificateActions.loadCertificatesSuccess, (state, { certificates }) => ({
    ...state,
    certificates,
    error: null,
    pending: false,
  })),
  on(CertificateActions.loadCertificatesFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  }))
);

export function certificateReducer(state: ICertificateState | undefined, action: Action) {
  return _reducer(state, action);
}

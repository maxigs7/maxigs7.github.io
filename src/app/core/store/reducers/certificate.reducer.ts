import { createReducer, on, Action } from '@ngrx/store';
import { initialCertificateState, ICertificateState } from '../states/index';
import { loadCertificatesSuccess } from '../actions/index';

export const certificateFeatureKey = 'certificate';

const _reducer = createReducer(
  initialCertificateState,
  on(loadCertificatesSuccess, (state, { data }) => {
    return { ...state, certificates: data };
  })
);

export function certificateReducer(
  state: ICertificateState | undefined,
  action: Action
) {
  return _reducer(state, action);
}

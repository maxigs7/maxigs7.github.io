import { createReducer, on, Action } from '@ngrx/store';
import { initialProfileState, IProfileState } from '../states/index';
import { ProfileActions } from '../actions/index';

export const profileFeatureKey = 'profile';

const _reducer = createReducer(
  initialProfileState,
  on(ProfileActions.loadProfile, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(ProfileActions.loadProfileSuccess, (state, { profile }) => ({
    ...state,
    profile,
    error: null,
    pending: false,
  })),
  on(ProfileActions.loadProfileFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  }))
);

export function profileReducer(state: IProfileState | undefined, action: Action) {
  return _reducer(state, action);
}

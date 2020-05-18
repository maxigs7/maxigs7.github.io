import { createReducer, on, Action } from '@ngrx/store';
import { initialProfileState, IProfileState } from '../states/index';
import { loadProfileSuccess } from '../actions/index';

export const profileFeatureKey = 'profile';

const _reducer = createReducer(
  initialProfileState,
  on(loadProfileSuccess, (state, { data }) => {
    return { ...state, profile: data };
  })
);

export function profileReducer(
  state: IProfileState | undefined,
  action: Action
) {
  return _reducer(state, action);
}

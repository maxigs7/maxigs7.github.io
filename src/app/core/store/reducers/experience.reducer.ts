import { createReducer, on, Action } from '@ngrx/store';
import { initialExperienceState, IExperienceState } from '../states/index';
import { loadExperiencesSuccess } from '../actions/index';

export const experienceFeatureKey = 'experience';

const _reducer = createReducer(
  initialExperienceState,
  on(loadExperiencesSuccess, (state, { data }) => {
    return { ...state, experiences: data };
  })
);

export function experienceReducer(
  state: IExperienceState | undefined,
  action: Action
) {
  return _reducer(state, action);
}

import { createReducer, on, Action } from '@ngrx/store';
import { initialExperienceState, IExperienceState } from '../states/index';
import { ExperienceActions } from '../actions/index';

export const experienceFeatureKey = 'experience';

const _reducer = createReducer(
  initialExperienceState,
  on(ExperienceActions.loadExperiences, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(ExperienceActions.loadExperiencesSuccess, (state, { experiences }) => ({
    ...state,
    experiences,
    error: null,
    pending: false,
  })),
  on(ExperienceActions.loadExperiencesFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  }))
);

export function experienceReducer(state: IExperienceState | undefined, action: Action) {
  return _reducer(state, action);
}

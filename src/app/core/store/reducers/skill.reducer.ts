import { createReducer, on, Action } from '@ngrx/store';
import { initialSkillState, ISkillState } from '../states/index';
import { SkillActions } from '../actions/index';

export const skillFeatureKey = 'skill';

const _reducer = createReducer(
  initialSkillState,
  on(SkillActions.loadSkills, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(SkillActions.loadSkillsSuccess, (state, { skills }) => ({
    ...state,
    skills,
    error: null,
    pending: false,
  })),
  on(SkillActions.loadSkillsFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  }))
);

export function skillReducer(state: ISkillState | undefined, action: Action) {
  return _reducer(state, action);
}

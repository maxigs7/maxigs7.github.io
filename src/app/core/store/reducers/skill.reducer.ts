import { createReducer, on, Action } from '@ngrx/store';
import { initialSkillState, ISkillState } from '../states/index';
import { loadSkillsSuccess } from '../actions/index';

export const skillFeatureKey = 'skill';

const _reducer = createReducer(
  initialSkillState,
  on(loadSkillsSuccess, (state, { data }) => {
    return { ...state, skills: data };
  })
);

export function skillReducer(state: ISkillState | undefined, action: Action) {
  return _reducer(state, action);
}

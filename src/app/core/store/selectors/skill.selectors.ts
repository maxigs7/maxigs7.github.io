import { createSelector } from '@ngrx/store';
import { IAppState, ISkillState } from '../states/index';

const _selectSkills = (state: IAppState) => state.skill;

export const selectSkills = createSelector(
  _selectSkills,
  (state: ISkillState) => state.skills
);

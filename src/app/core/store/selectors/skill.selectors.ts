import { createSelector } from '@ngrx/store';
import { IAppState, ISkillState } from '../states/index';

const _selectSkills = (state: IAppState) => state.skill;

const selectSkills = createSelector(_selectSkills, (state: ISkillState) => state.skills);
const selectSkillsPending = createSelector(_selectSkills, (state) => state.pending);
const selectSkillsError = createSelector(_selectSkills, (state) => state.error);

export const SkillSelectors = { selectSkills, selectSkillsPending, selectSkillsError };

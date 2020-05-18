import { createAction, props } from '@ngrx/store';
import { ISkill } from 'src/app/models/index';

export const LOAD_SKILLS = '[Skill] Load Skills';
export const LOAD_SKILLS_SUCCESS = '[Skill] Load Skills Success';
export const LOAD_SKILLS_FAILURE = '[Skill] Load Skills Failure';

export const loadSkills = createAction(LOAD_SKILLS);

export const loadSkillsSuccess = createAction(
  LOAD_SKILLS_SUCCESS,
  props<{ data: ISkill[] }>()
);

export const loadSkillsFailure = createAction(
  LOAD_SKILLS_FAILURE,
  props<{ error: any }>()
);

import { createAction, props } from '@ngrx/store';
import { ISkill } from 'src/app/models/index';

const loadSkills = createAction('[Skill] Load Skills');
const loadSkillsSuccess = createAction('[Skill] Load Skills Success', props<{ skills: ISkill[] }>());
const loadSkillsFailure = createAction('[Skill] Load Skills Failure', props<{ error: any }>());

export const SkillActions = { loadSkills, loadSkillsSuccess, loadSkillsFailure };

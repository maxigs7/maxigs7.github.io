import { createAction, props } from '@ngrx/store';
import { IExperience } from 'src/app/models/index';

const loadExperiences = createAction('[Experience] Load Experiences');
const loadExperiencesSuccess = createAction(
  '[Experience] Load Experiences Success',
  props<{ experiences: IExperience[] }>()
);
const loadExperiencesFailure = createAction('[Experience] Load Experiences Failure', props<{ error: any }>());

export const ExperienceActions = { loadExperiences, loadExperiencesSuccess, loadExperiencesFailure };

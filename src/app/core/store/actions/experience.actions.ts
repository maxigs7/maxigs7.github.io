import { createAction, props } from '@ngrx/store';
import { IExperience } from 'src/app/models/index';

export const LOAD_EXPERIENCES = '[Experience] Load Experiences';
export const LOAD_EXPERIENCES_SUCCESS = '[Experience] Load Experiences Success';
export const LOAD_EXPERIENCES_FAILURE = '[Experience] Load Experiences Failure';

export const loadExperiences = createAction(LOAD_EXPERIENCES);

export const loadExperiencesSuccess = createAction(
  LOAD_EXPERIENCES_SUCCESS,
  props<{ data: IExperience[] }>()
);

export const loadExperiencesFailure = createAction(
  LOAD_EXPERIENCES_FAILURE,
  props<{ error: any }>()
);

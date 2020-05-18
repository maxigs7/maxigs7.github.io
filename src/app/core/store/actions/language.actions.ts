import { createAction, props } from '@ngrx/store';
import { ILanguage } from 'src/app/models/index';

export const LOAD_LANGUAGES = '[Language] Load Languages';
export const LOAD_LANGUAGES_SUCCESS = '[Language] Load Languages Success';
export const LOAD_LANGUAGES_FAILURE = '[Language] Load Languages Failure';

export const loadLanguages = createAction(LOAD_LANGUAGES);

export const loadLanguagesSuccess = createAction(
  LOAD_LANGUAGES_SUCCESS,
  props<{ data: ILanguage[] }>()
);

export const loadLanguagesFailure = createAction(
  LOAD_LANGUAGES_FAILURE,
  props<{ error: any }>()
);

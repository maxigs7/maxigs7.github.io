import { createAction, props } from '@ngrx/store';

const changeLanguage = createAction('[Core] Change Language', props<{ language: string }>());
const changeLanguageSuccess = createAction('[Core] Change LanguageSuccess');

export const CoreActions = { changeLanguage, changeLanguageSuccess };

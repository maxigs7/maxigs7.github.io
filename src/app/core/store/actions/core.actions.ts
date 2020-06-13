import { createAction, props } from '@ngrx/store';

const changeLanguage = createAction('[Core] Change Language', props<{ language: string }>());
const changeLanguageSuccess = createAction('[Core] Change LanguageSuccess');
const closeMenu = createAction('[Core] Close Menu');
const toggleMenu = createAction('[Core] Toggle Menu');

export const CoreActions = { changeLanguage, changeLanguageSuccess, closeMenu, toggleMenu };

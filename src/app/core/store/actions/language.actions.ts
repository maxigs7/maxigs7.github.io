import { createAction, props } from '@ngrx/store';
import { ILanguage } from 'src/app/models/index';

const loadLanguages = createAction('[Language] Load Languages');
const loadLanguagesSuccess = createAction('[Language] Load Languages Success', props<{ languages: ILanguage[] }>());
const loadLanguagesFailure = createAction('[Language] Load Languages Failure', props<{ error: any }>());

export const LanguageActions = { loadLanguages, loadLanguagesSuccess, loadLanguagesFailure };

import { createReducer, on, Action } from '@ngrx/store';
import { initialLanguageState, ILanguageState } from '../states/index';
import { LanguageActions } from '../actions/index';

export const languageFeatureKey = 'language';

const _reducer = createReducer(
  initialLanguageState,
  on(LanguageActions.loadLanguages, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(LanguageActions.loadLanguagesSuccess, (state, { languages }) => ({
    ...state,
    languages,
    error: null,
    pending: false,
  })),
  on(LanguageActions.loadLanguagesFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  }))
);

export function languageReducer(state: ILanguageState | undefined, action: Action) {
  return _reducer(state, action);
}

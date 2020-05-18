import { createReducer, on, Action } from '@ngrx/store';
import { initialLanguageState, ILanguageState } from '../states/index';
import { loadLanguagesSuccess } from '../actions/index';

export const languageFeatureKey = 'language';

const _reducer = createReducer(
  initialLanguageState,
  on(loadLanguagesSuccess, (state, { data }) => {
    return { ...state, languages: data };
  })
);

export function languageReducer(
  state: ILanguageState | undefined,
  action: Action
) {
  return _reducer(state, action);
}

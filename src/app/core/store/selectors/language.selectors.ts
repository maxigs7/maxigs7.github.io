import { createSelector } from '@ngrx/store';
import { IAppState, ILanguageState } from '../states/index';

const _selectLanguages = (state: IAppState) => state.language;

export const selectLanguages = createSelector(
  _selectLanguages,
  (state: ILanguageState) => state.languages
);

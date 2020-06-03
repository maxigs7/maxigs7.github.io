import { createSelector } from '@ngrx/store';
import { IAppState, ILanguageState } from '../states/index';

const _selectLanguages = (state: IAppState) => state.language;

const selectLanguages = createSelector(_selectLanguages, (state: ILanguageState) => state.languages);
const selectLanguagesPending = createSelector(_selectLanguages, (state) => state.pending);
const selectLanguagesError = createSelector(_selectLanguages, (state) => state.error);

export const LanguageSelectors = { selectLanguages, selectLanguagesPending, selectLanguagesError };

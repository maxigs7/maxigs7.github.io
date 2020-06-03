import { createSelector } from '@ngrx/store';
import { IAppState, ICoreState } from '../states/index';

const _selectCore = (state: IAppState) => state.core;

const selectSelectedLanguage = createSelector(_selectCore, (state: ICoreState) => state.selectedLanguage);

export const CoreSelectors = { selectSelectedLanguage };

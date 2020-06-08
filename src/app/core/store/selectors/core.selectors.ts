import { createSelector } from '@ngrx/store';
import { IAppState, ICoreState } from '../states/index';

const _selectCore = (state: IAppState) => state.core;

const selectSelectedLanguage = createSelector(_selectCore, (state: ICoreState) => state.selectedLanguage);
const selectMenuIsOpen = createSelector(_selectCore, (state: ICoreState) => state.menuIsOpen);

export const CoreSelectors = { selectSelectedLanguage, selectMenuIsOpen };

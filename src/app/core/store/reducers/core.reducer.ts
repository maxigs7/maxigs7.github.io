import { createReducer, on, Action } from '@ngrx/store';
import { ICoreState, initialCoreState } from '../states/index';
import { CoreActions } from '../actions/index';

export const coreFeatureKey = 'core';

const _reducer = createReducer(
  initialCoreState,
  on(CoreActions.changeLanguage, (state, { language }) => {
    return { ...state, selectedLanguage: language };
  }),
  on(CoreActions.toggleMenu, (state) => {
    return { ...state, menuIsOpen: !state.menuIsOpen };
  }),
  on(CoreActions.closeMenu, (state) => {
    return { ...state, menuIsOpen: false };
  })
);

export function coreReducer(state: ICoreState | undefined, action: Action) {
  return _reducer(state, action);
}

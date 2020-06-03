import { createReducer, on, Action } from '@ngrx/store';
import { ICoreState, initialCoreState } from '../states/index';
import { CoreActions } from '../actions/index';

export const coreFeatureKey = 'core';

const _reducer = createReducer(
  initialCoreState,
  on(CoreActions.changeLanguage, (state, { language }) => {
    return { ...state, selectedLanguage: language };
  })
);

export function coreReducer(state: ICoreState | undefined, action: Action) {
  return _reducer(state, action);
}

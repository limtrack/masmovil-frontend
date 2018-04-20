import { Action } from '@ngrx/store';
import { AppStore, initialAppStore } from './app.store';

export const INIT = 'INIT';
export const SHOW_LOADING = 'SHOW_LOADING';
export const SELECTED_ITEM = 'SELECTED_ITEM';

export interface CustomAction extends Action {
  type: string;
  payload?: any;
}

export function appReducer(state: AppStore = initialAppStore, action: CustomAction) {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state, {
        items: action.payload
      });
    case SHOW_LOADING:
      return Object.assign({}, state, {
        showLoading: action.payload
      });
    case SELECTED_ITEM:
      return Object.assign({}, state, {
        selectedItem: action.payload
      });

    default:
      return state;
  }
}

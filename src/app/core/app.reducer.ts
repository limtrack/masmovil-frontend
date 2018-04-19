import { Action } from '@ngrx/store';
import { AppStore, initialAppStore } from './app.store';
import { INIT, SHOW_LOADING, SELECTED_ITEM } from './app.actions';

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

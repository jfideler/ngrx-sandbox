import { Action } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';


// tslint:disable-next-line:no-empty-interface
export interface State {
  userName?: string;
  friendlyName?: string;
}

export const initialState: State = {
  userName: null,
  friendlyName: null
};

export const getUserName = (state: State) => state.userName;
export const getFriendlyName = (state: State) => state.friendlyName;

export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {

    case authActions.AuthActionTypes.SetAuths:

      return handleSetAuths(state, action);

    case authActions.AuthActionTypes.UpdateAuths:

      return state;

    default:

      return state;
  }
}

function handleSetAuths(state: State, action: authActions.SetAuths): State {
  return {
    ...state,
    userName: action.payload.userName,
    friendlyName: action.payload.friendlyName
  };
}

function handleUpdateAuths(state: State, action: authActions.UpdateAuths): State {
  return {
    ...state
  };
}

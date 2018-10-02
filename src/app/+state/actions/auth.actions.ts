import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetAuths = '[Auth] Set Auths',
  UpdateAuths = '[Auth] Update Auths'
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuths;

  constructor(public payload: any) {
  }
}

export class UpdateAuths implements Action {
  readonly type = AuthActionTypes.UpdateAuths;

  constructor() {
  }
}

export type AuthActions = LoadAuths | SetAuths | UpdateAuths;

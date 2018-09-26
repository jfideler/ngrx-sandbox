import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions) {}

  @Effect()
  loadAuths$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuths),
    switchMap(() => {

      // return this.http.get<string>('login')
      //   .pipe(
      //     map((userName) => {
      //        return new authActions.SetAuths(userName);
      //     })
      //   )

      return of (new authActions.SetAuths({
          userName: 'jeff',
          friendlyName: 'Jeffrey'
        })
      );
    })
  );
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadAuths$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuths),
    switchMap(() => {
      return of (new authActions.SetAuths({
          userName: 'jeff',
          friendlyName: 'Jeffrey'
        })
      );
    })
  );


  @Effect()
  updateAuths$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.UpdateAuths),
    switchMap(() => {
      return this.http.get<any>(`https://swapi.co/api/people/1/`)
        .pipe(
          map((person) => {
            const name: string = person.name;
            return new authActions.SetAuths({
              userName: name.replace(' ', ''),
              friendlyName: name
            });
          })
        );
    })
  );
}

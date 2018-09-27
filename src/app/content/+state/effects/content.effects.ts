import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { ContentActionTypes } from '../actions/content.actions';
import * as contentActions from '../actions/content.actions';


@Injectable()
export class ContentEffects {

  @Effect()
  loadDocs$ = this.actions$.pipe(
    ofType(ContentActionTypes.LoadDocs),
    switchMap(() => {
      return this.http.get<any>(`https://swapi.co/api/starships`).pipe(
        map(response => {
          return new contentActions.SetDocs(response.results);
        })
      );
    })
  );

  @Effect()
  loadMoreDocs$ = this.actions$.pipe(
    ofType(ContentActionTypes.LoadDocs),
    switchMap(() => {
      return this.http.get<any>(`https://swapi.co/api/starships/?page=2`).pipe(
        map(response => {
          return new contentActions.SetDocs(response.results);
        })
      );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}

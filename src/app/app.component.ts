import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './+state/selectors/auth.selectors';
import * as fromState from './+state/reducers';
import * as authActions from './+state/actions/auth.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'sandbox-app';
  name$: Observable<string>;
  username = 'default username';

  constructor(private store: Store<fromState.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new authActions.LoadAuths());

// tslint:disable-next-line: deprecation
    this.name$ = this.store.select(fromRoot.getFriendlyName);
  }
}

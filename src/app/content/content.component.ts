import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/reducers';
import * as authActions from '../store/actions/auth.actions';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {

  model = 'new Name?';

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {

  }

  changeUser(event: any, user: any) {

    const newUser = user ? user : this.model;
    this.store.dispatch(new authActions.SetAuths({
      userName: newUser,
      friendlyName: newUser
    }));
  }
}

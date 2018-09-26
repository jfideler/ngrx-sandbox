import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as authActions from '../../store/actions/auth.actions';

@Component({
  selector: 'app-content-detail-panel',
  templateUrl: './content-detail-panel.component.html'
})
export class ContentDetailPanelComponent implements OnInit {

@Input() mode: string;
@Input() projectId: string;
@Input() model;
display = false;

constructor(private store: Store<fromRoot.State>) {}
  ngOnInit(): void {
  }

  updateUser(event: any, user: any) {

    const newUser = user ? user : this.model;
    this.store.dispatch(new authActions.UpdateAuths());
  }

  changeUser(event: any, user: any) {

    const newUser = user ? user : this.model;
    this.store.dispatch(new authActions.SetAuths({
      userName: newUser,
      friendlyName: newUser
    }));
  }
}

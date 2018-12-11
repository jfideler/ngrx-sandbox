import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as authActions from '../../+state/actions/auth.actions';
import * as fromRoot from '../../+state/reducers';

@Component({
  selector: 'app-content-toolbar',
  templateUrl: './content-toolbar.component.html'
})
export class ContentToolbarComponent implements OnInit {

@Input() mode: string;
@Input() projectId: string;
@Input() user;
@Input() username;

constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
  }

  updateUser(event: any, user: any) {

    this.store.dispatch(new authActions.UpdateAuths());
  }

  changeUser(event: any, user: any) {

    const newUser = user ? user : this.username;
    this.store.dispatch(new authActions.SetAuths({
      userName: newUser,
      friendlyName: '!' + newUser + '!'
    }));
  }

  onModeChange(arg: any) {
    if (arg.target.checked) {
      this.mode = this.mode + '++';
    } else {
      this.mode = this.mode.substring(0, this.mode.indexOf('++'));
    }
  }
}

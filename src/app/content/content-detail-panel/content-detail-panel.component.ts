import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as authActions from '../../store/actions/auth.actions';
import { ContentModel } from '../content.model';

@Component({
  selector: 'app-content-detail-panel',
  templateUrl: './content-detail-panel.component.html'
})
export class ContentDetailPanelComponent implements OnInit, OnChanges {

@Input() mode: string;
@Input() projectId: string;
@Input() user;
@Input() model: ContentModel;
display = false;

constructor(private store: Store<fromRoot.State>) {}
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, this.model);
    this.display = (changes.model.currentValue !== null && changes.model.currentValue !== changes.model.previousValue);
  }


  updateUser(event: any, user: any) {

    const newUser = user ? user : this.user;
    this.store.dispatch(new authActions.UpdateAuths());
  }

  changeUser(event: any, user: any) {

    const newUser = user ? user : this.user;
    this.store.dispatch(new authActions.SetAuths({
      userName: newUser,
      friendlyName: newUser
    }));
  }
}

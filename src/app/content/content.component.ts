import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/reducers';
import * as authActions from '../store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {
  public projectId$: Observable<string> = this.store.select(fromRoot.getProjectId);
  model = 'new Name?';
  mode = 'default';

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {

  }

}

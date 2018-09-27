import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/reducers';
import * as fromContent from './+state/reducers';
import { Observable } from 'rxjs';
import { ContentModel } from './content.model';
import { LoadDocs } from './+state/actions/content.actions';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {
  public projectId$: Observable<string> = this.store.select(fromRoot.getProjectId);
  content$: Observable<ContentModel[]>;
  model = 'new Name?';
  mode = 'doc-list';

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.content$ = this.store.select(fromContent.getAllDocsWithId);
    this.store.dispatch(new LoadDocs());
  }

}

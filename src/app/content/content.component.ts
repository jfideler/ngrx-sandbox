import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/reducers';
import * as fromContent from './+state/reducers';
import { Observable } from 'rxjs';
import { ContentModel } from './content.model';
import { LoadDocs, LoadMoreDocs, SetDocId } from './+state/actions/content.actions';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})

export class ContentComponent implements OnChanges {

  public projectId$: Observable<string> = this.store.select(fromRoot.getProjectId);
  content$: Observable<ContentModel[]>;
  document$: Observable<ContentModel>;
  model = 'new Name?';
  mode = 'doc-list';


  constructor(private store: Store<fromRoot.State>) {
    this.Init();
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
  }

  Init(): void {

    this.content$ = this.store.select(fromContent.getAllDocsWithId);
    this.store.dispatch(new LoadDocs());
  }

  select(event: any) {

    if ( event === 1) {
      console.log('page 1...');
      this.content$ = this.store.select(fromContent.getAllDocsWithId);
      this.store.dispatch(new LoadDocs());
    } else {
      console.log('page 2...');
      this.content$ = this.store.select(fromContent.getAllDocsWithId);
      this.store.dispatch(new LoadMoreDocs());
    }

  }

  selectDoc(event: any) {
    console.log('got selected ', event);
    // this.document$ = this.store.select(fromContent.getCurrentDoc);
    // this.store.dispatch(new LoadDocs());

    this.store.dispatch(new SetDocId(event));
    this.document$ = this.store.select(fromContent.getCurrentDoc);
  }

}

import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../+state/selectors/auth.selectors';
import * as fromState from '../+state/reducers';
import * as fromContentSelectors from '../+state/selectors/content.selectors' ;
import { Observable } from 'rxjs';
import { ContentModel } from './content.model';
import { LoadDocs, LoadMoreDocs, SetDocId, LoadAllDocs } from '../+state/actions/content.actions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})

export class ContentComponent implements OnChanges {

  @Input() username: string;
  contentForm: FormGroup = new FormGroup({});
// tslint:disable-next-line: deprecation
  public projectId$: Observable<string> = this.store.select(fromRoot.getProjectId);
  content$: Observable<ContentModel[]>;
  document$: Observable<ContentModel>;
  model = 'new Name?';
  mode = 'doc-list';


  constructor(private store: Store<fromState.State>) {
    this.Init();


    this.contentForm.valueChanges.subscribe(value => {
      // this.store.dispatch(new SetHealthAction(flattened));
      console.log('form changed ', value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
  }

  Init(): void {

// tslint:disable-next-line: deprecation
    this.content$ = this.store.select(fromContentSelectors.getAllDocsWithId);
    this.store.dispatch(new LoadDocs());
  }

  selectSet(event: any) {

    switch (event) {
      case 1:
        this.store.dispatch(new LoadDocs());
        break;

      case 2:
        this.store.dispatch(new LoadMoreDocs());
        break;

      case 3:
      this.store.dispatch(new LoadAllDocs());
        break;

      default:
        break;

    }

// tslint:disable-next-line: deprecation
    this.content$ = this.store.select(fromContentSelectors.getAllDocsWithId);
  }

  selectDoc(event: any) {

    this.store.dispatch(new SetDocId(event));
// tslint:disable-next-line: deprecation
    this.document$ = this.store.select(fromContentSelectors.getCurrentDoc);
  }

}

import { Action } from '@ngrx/store';

import {ContentModel} from '../../content.model';

export enum ContentActionTypes {
  LoadDocs = '[Content] Load Docs',
  SetDocs = '[Content] Set Docs',
  SetDocId = '[Content] Set DocId'
}

export class LoadDocs implements Action {
  readonly type = ContentActionTypes.LoadDocs;
}

export class LoadMoreDocs implements Action {
  readonly type = ContentActionTypes.LoadDocs;
}

export class SetDocs implements Action {
  readonly type = ContentActionTypes.SetDocs;

  constructor(public payload: ContentModel[]) {}
}

export class SetDocId implements Action {
  readonly type = ContentActionTypes.SetDocId;

  constructor(public payload: number) {}
}
export type ContentActions = LoadDocs | LoadMoreDocs | SetDocId | SetDocs;

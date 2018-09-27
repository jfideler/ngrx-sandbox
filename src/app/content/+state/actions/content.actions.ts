import { Action } from '@ngrx/store';

import {ContentModel} from '../../content.model';

export enum ContentActionTypes {
  LoadDocs = '[Content] Load Docs',
  SetDocs = '[Content] Set Docs'
}

export class LoadDocs implements Action {
  readonly type = ContentActionTypes.LoadDocs;
}

export class SetDocs implements Action {
  readonly type = ContentActionTypes.SetDocs;

  constructor(public payload: ContentModel[]) {}
}

export type ContentActions = LoadDocs | SetDocs;

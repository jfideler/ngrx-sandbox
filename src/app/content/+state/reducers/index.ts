import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromContent from './content.reducer';
import * as fromRoot from '../../../store/reducers';

export interface ContentState {
  docs: fromContent.State;
  doc: fromContent.State;
}

export interface State extends fromRoot.State {
  content: ContentState;
}

export const reducers: ActionReducerMap<ContentState> = {
  docs: fromContent.reducer,
  doc: fromContent.reducer
};

export const selectContentState = createFeatureSelector<ContentState>('content');
export const selectDocs = createSelector(selectContentState, state => state.docs);
export const getAllDocs = createSelector(selectDocs, fromContent.getAllDocs);
export const getDocId = createSelector(selectContentState, state => state.doc);


export const getAllDocsWithId = createSelector(getAllDocs, allDocs => {
  if (allDocs && allDocs.length > 0) {
    allDocs.forEach(s => {
      const regex = new RegExp(/.*\/(\d+)\/$/g);
      const match = regex.exec(s.url);
      if (match.length > 1) {
        s.id = +match[1];
      }
    });
  }
  return allDocs;
});

export const getCurrentDoc = createSelector(getDocId, (docs) => {
  if (docs ) {
      return docs.doc;
  }

  return null;
});

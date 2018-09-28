import { Action } from '@ngrx/store';
import { ContentActionTypes, SetDocs, ContentActions, SetDocId } from '../actions/content.actions';
import { ContentModel } from '../../content.model';

export interface State {
  allDocs: ContentModel[];
  doc: ContentModel;
}

const initialState: State = {
  allDocs: [],
  doc: null
};

export function reducer(state = initialState, action: ContentActions): State {
  switch (action.type) {
    case ContentActionTypes.SetDocs:
      return handleSetDocs(state, action);

    case ContentActionTypes.SetDocId:
      const result = handleSetDocId(state, action);
      result.doc = result.allDocs.filter(f => f.id === action.payload)[0];
      return result;

    default:
      return state;
  }
}

function handleSetDocs(state, action: SetDocs): State {
  return {
    ...state,
    allDocs: action.payload
  };
}

function handleSetDocId(state, action: SetDocId): State {
  return {
    ...state,
    docId: action.payload
  };
}

export const getAllDocs = (state: State) => state.allDocs;
export const getDocId = (state: State) => state.doc;

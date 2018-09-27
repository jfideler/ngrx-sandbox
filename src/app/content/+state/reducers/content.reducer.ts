import { Action } from '@ngrx/store';
import { ContentActionTypes, SetDocs, ContentActions } from '../actions/content.actions';
import { ContentModel } from '../../content.model';

export interface State {
  allDocs: ContentModel[];
}

const initialState: State = {
  allDocs: []
};

export function reducer(state = initialState, action: ContentActions): State {
  switch (action.type) {
    case ContentActionTypes.SetDocs:
      return handleSetShips(state, action);

    default:
      return state;
  }
}

function handleSetShips(state, action: SetDocs): State {
  return {
    ...state,
    allDocs: action.payload
  };
}

export const getAllDocs = (state: State) => state.allDocs;

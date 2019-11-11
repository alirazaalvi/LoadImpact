import produce from 'immer';
import { CharactersActionTypes, ActionNames } from './actions';
import { Character } from './types';

export interface CharacterState {
  characters: Character[];
  character: Character | null;
  noResult: boolean;
  apiFetching: boolean;
  apiError: string;
}

export const defaultState: CharacterState = {
  characters: [],
  character: null,
  noResult: false,
  apiFetching: false,
  apiError: '',
};

export const reducer = (
  state: CharacterState = defaultState,
  action: CharactersActionTypes
) => produce(state, (draft) => {
  let currentDraft = draft;

  switch(action.type) {
    case ActionNames.FETCH_CHARACTERS_SUCCESS: {
      currentDraft.characters = action.payload.characters;
      currentDraft.noResult = action.payload.characters.length === 0 ? true : false;
      currentDraft.apiFetching = false;
      return;
    }
    case ActionNames.FETCH_CHARACTERS_REQUEST: {
      currentDraft.noResult = false;
      currentDraft.apiFetching = true;
      return;
    }
    default: {
      currentDraft = draft;
    }
  }
});

export default reducer;
import produce from 'immer';
import { CharactersActionTypes, ActionNames } from './actions';
import { Character } from './types';
import { messagesList } from '../../shared/messages';

export interface CharacterState {
  characters: Character[];
  character: Character | null;
  activityStatusMessage: string;
}

export const defaultState: CharacterState = {
  characters: [],
  character: null,
  activityStatusMessage: ''
};

export const reducer = (
  state: CharacterState = defaultState,
  action: CharactersActionTypes
) => produce(state, (draft) => {
  let currentDraft = draft;

  switch(action.type) {
    case ActionNames.FETCH_CHARACTERS_SUCCESS: {
      currentDraft.characters = action.payload.characters;
      currentDraft.activityStatusMessage = action.payload.characters.length === 0 ? messagesList['noResult'] : '';
      return;
    }
    case ActionNames.FETCH_CHARACTERS_REQUEST: {
      currentDraft.activityStatusMessage = messagesList['apiFetch'];
      return;
    }
    case ActionNames.FETCH_CHARACTERS_ERROR: {
      currentDraft.activityStatusMessage = messagesList['apiError'];
      return;
    }
    default: {
      currentDraft = draft;
    }
  }
});

export default reducer;
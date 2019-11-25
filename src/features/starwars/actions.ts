import { ThunkDispatch } from 'redux-thunk';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { AppState } from '../../shared/store';
import { formatApiError } from '../../shared/helpers';
import { ApiRequest, ApiResponse, ApiError } from '../../shared/AppTypes';
import { SearchInput, Character } from './types';

export enum ActionNames {
  FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
  SEARCH_CHARACTER = 'SEARCH_CHARACTER',
}

export type Actions =
  ({ type: ActionNames.SEARCH_CHARACTER, payload: { characters: Character[] }; })
  | ({ type: ActionNames.FETCH_CHARACTERS_REQUEST } & ApiRequest<null> )
  | ({ type: ActionNames.FETCH_CHARACTERS_SUCCESS } & ApiRequest<null> & ApiResponse<GetCharactersResponse> )
  | ({ type: ActionNames.FETCH_CHARACTERS_ERROR } & ApiRequest<null> & ApiError )


export interface GetCharactersResponse {
  characters: Character[];
}

export const fetchCharacters = (searchInput: SearchInput) => {
  return async (dispatch: ThunkDispatch<AppState, any, Actions>) => {
    //dispatch(loadCurrentUserRequest());
    dispatch(({ type: ActionNames.FETCH_CHARACTERS_REQUEST, request: null }));
    try {
      axios.get(`https://swapi.co/api/people/?search=${searchInput.searchText}`)
      .then((response: AxiosResponse) => {
        dispatch({
          type: ActionNames.FETCH_CHARACTERS_SUCCESS,
          request: null,
          payload: { characters: response.data.results as Character[] },
        });
      }).catch((error: AxiosError) => {
        dispatch(({
          type: ActionNames.FETCH_CHARACTERS_ERROR,
          request: null,
          error: formatApiError(error),
        }));
      });
    } catch (error) {
      dispatch(({
        type: ActionNames.FETCH_CHARACTERS_ERROR,
        request: null,
        error: formatApiError(error),
      }));
    }
  };
};

export type CharactersActionTypes =  Actions;
import { rootReducer } from '../configureStore';
import * as Character from '../features/starwars/reducer';
import { CharactersActionTypes } from '../features/starwars/actions';

export type AppState = ReturnType<typeof rootReducer>;

export type ActionTypes = (CharactersActionTypes);

export const reducers = {
  charactersReducer: Character.reducer,
};



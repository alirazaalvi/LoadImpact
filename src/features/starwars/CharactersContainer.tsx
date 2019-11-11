import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../shared/store';
import { useReduxDispatch } from '../../shared/helpers';
import { fetchCharacters } from './actions';
import { Character, SearchInput } from './types';
import { messagesList } from '../../shared/messages';
import Header from  '../../layout/Header';
import Message from './Message';

import CharacterListItem from './CharacterListItem';


const CharactersContainer = () => {
  const charactersReducer = useSelector((state: AppState) => state.charactersReducer);
  const reduxDispatch = useReduxDispatch();
  const handleSearch = (searchInput: SearchInput) => (reduxDispatch(fetchCharacters(searchInput)));

  const characters: Character[] = charactersReducer.characters;
  const {  apiFetching, noResult } = charactersReducer;

  let informationMarkup: JSX.Element | null = null;

  if (characters.length === 0 || apiFetching) {
    let infoMessage = messagesList['homePage'];
    if (noResult) { infoMessage = messagesList['noResult']; }
    else if (apiFetching) { infoMessage = messagesList['apiFetch'];}

    informationMarkup = <Message message={infoMessage} />;
  }

  const charactersMarkup: JSX.Element[] = characters.map(character => (
    <CharacterListItem key={character.name} character={character} />
  ));

  return (
      <div>
        <Header
            handleSearch={handleSearch}
            heading={'Star Wars Universe'}
        />
        <div
          className="container"
          data-testid="container"
        >
          <br />
          <div className="App">
          <h3 className="has-primary-color has-text-centered">Explore your favourite characters</h3>
          <br />
          <div className="row">
            {
              informationMarkup ? informationMarkup : charactersMarkup
            }
          </div>
          </div>
        </div>
    </div>)
}

export default CharactersContainer;

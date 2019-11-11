import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import CharacterListItem from './CharacterListItem';
import { Character } from './types';
import { characters } from '../../data/testData';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

const character: Character = characters[0];

test('character item is rendered', () => {
  const { getByText } = render(<BrowserRouter><CharacterListItem character={character} /></BrowserRouter>);

  const homeWorldName = character.homeworldDetails ? character.homeworldDetails.name : '';
  const speciesName = character.speciesDetails ? character.speciesDetails.name : '';


  expect(getByText(character.name).innerHTML).toBe(character.name);
  expect(getByText(homeWorldName).innerHTML).toBe(homeWorldName);
  expect(getByText(speciesName).innerHTML).toBe(speciesName);
});
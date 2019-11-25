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

  expect(getByText(character.name).innerHTML).toBe(character.name);
  expect(getByText(character.gender).innerHTML).toBe(character.gender);
  expect(getByText(character.birth_year).innerHTML).toBe(character.birth_year);
  expect(getByText(character.height).innerHTML).toBe(character.height);
  expect(getByText(character.mass).innerHTML).toBe(character.mass);
});
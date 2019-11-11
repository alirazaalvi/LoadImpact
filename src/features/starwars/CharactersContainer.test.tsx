import React from 'react';
import { cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../testUtils/testingHelper';
import CharactersContainer from './CharactersContainer';

afterEach(cleanup);

test('should render default view', async () => {
    const { getByTestId } = renderWithRedux(<CharactersContainer />);

    expect(getByTestId('container')).toBeInTheDocument();
});

// test('should render characters', async () => {
//     const { getAllByTestId } = renderWithRedux(<CharactersContainer />);

//     const characterListNode = await waitForElement(() => getAllByTestId('character-item'));

//     expect(characterListNode).toHaveLength(10);
// });
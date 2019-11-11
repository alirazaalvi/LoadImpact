import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Movie } from './types';
import { movies } from '../../data/testData';
import MovieListItem from './MovieListItem';


afterEach(cleanup);

const movie: Movie = movies[0];

test('character item is rendered', () => {
  const { getByText } = render(<BrowserRouter><MovieListItem movie={movie} /></BrowserRouter>);

  expect(getByText(movie.title).innerHTML).toBe(movie.title);
  expect(getByText(movie.release_date).innerHTML).toBe(movie.release_date);
});
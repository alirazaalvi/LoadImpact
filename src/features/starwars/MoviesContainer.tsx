import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import { Movie, Character } from './types';


import { MovieListItem } from './MovieListItem';
import Message from './Message';
import { messagesList } from '../../shared/messages';

interface OwnProps extends RouteComponentProps {
  characterInfo: Character
}

export const MoviesContainer = (props: OwnProps) => {
  let [ movies, setMovies] = useState<Movie[]>([]);
  let [ fetchingMovies, setFetchingMovies] = useState<boolean>(true);

  const characterInfo: Character | null = props.location.state ? props.location.state.characterInfo as Character : null;

  // Doing api calls directly because movies list will not stay inside redux state
  useEffect(() => {
    const incomingMoviesList = characterInfo ? characterInfo.films : [];
    const requestsList = incomingMoviesList.map(movie => axios.get(movie));
    setFetchingMovies(true);
    axios.all(requestsList).then(response => {
      const moviesResult = response;
      const moviesList = moviesResult.map(movie => movie.data as Movie);

      setFetchingMovies(false);
      setMovies(moviesList);
    });
  }, [characterInfo]);

  if(movies.length > 0) {
    movies = movies.sort((a, b) => b.release_date.localeCompare(a.release_date));
  }

  let informationMarkup: JSX.Element | null = null;

  if (fetchingMovies || movies.length === 0) {
    const informationMessage = fetchingMovies ? messagesList['apiFetchMovies'] : messagesList['noResult'];
    informationMarkup =  <Message message={informationMessage} />;
  }

  const moviesMarkup = movies.map(movie => (
    <div key={`${movie.title}${movie.episode_id}`}>
      <MovieListItem movie={movie} />
    </div>
  ));

  return (
    <div
      className="container"
      data-testid="container"
    >
      <br />
      <h1 className="has-text-centered"><strong>Movies</strong></h1>
      <br />
      { informationMarkup ? informationMarkup : moviesMarkup }
    </div>
  );
}

export default MoviesContainer;
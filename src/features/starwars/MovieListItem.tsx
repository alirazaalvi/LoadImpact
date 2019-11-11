import * as React from 'react';
import { Movie } from './types';


interface OwnProps {
  movie: Movie
}

interface ComponentProps extends OwnProps { };

export const MovieListItem = (props: ComponentProps) => {
  const movie = props.movie;

  return (
    <div data-testid="character-item">
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <strong>{movie.title}</strong>
              <br />
              <small><b>{movie.release_date}</b></small>
              <br />
              <p>{movie.opening_crawl}</p>
            </div>
          </div>
        </article>
      </div>
      <br />
    </div>
  );
};

export default MovieListItem;
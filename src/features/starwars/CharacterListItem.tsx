import * as React from 'react';
import { Character } from './types';
import { Link } from 'react-router-dom';

interface OwnProps {
  character: Character
}

interface ComponentProps extends OwnProps { };

export const HotelListItem = (props: ComponentProps) => {
  const character = props.character;

  return (
    <div data-testid="character-item" className="two-column-auto">
      <div className="box">
        <strong>{character.name}</strong>
        <div className="row">
          <div className="column">
            <div className="content">
              <div><small>Birth year: <span>{character.birth_year}</span></small></div>
              <div><small>Heigth: <span>{character.height}</span></small></div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div><small>Gender: <span>{character.gender}</span></small></div>
              <div><small>Mass: <span>{character.mass}</span></small></div>
            </div>
          </div>
        </div>
        <div className="has-right-aligned-text">
          <small>
            <Link to={{
              pathname: '/movies',
              state: {
                characterInfo: character,
              }
            }}>Explore Movies >>
                </Link>
          </small>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HotelListItem;
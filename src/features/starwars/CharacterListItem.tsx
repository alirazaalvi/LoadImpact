import * as React from 'react';
import { Character } from './types';
import { Link } from 'react-router-dom';

interface OwnProps {
  character: Character
}

interface ComponentProps extends OwnProps { };

export const HotelListItem = (props: ComponentProps) => {
  const character = props.character;

  const homeWorldName = props.character.homeworldDetails ? props.character.homeworldDetails.name : '';
  const speciesName = props.character.speciesDetails ? props.character.speciesDetails.name : '';

  return (
    <div data-testid="character-item" className="two-column-auto">
      <div className="box">
        <strong>{character.name}</strong>
        <div className="row">
          <div className="column">
            <div className="content">
              <div><small>Name: <span>{homeWorldName}</span></small></div>
              <div><small>Specie: <span>{speciesName}</span></small></div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div><small>Birth year: <span>{character.birth_year}</span></small></div>
              <div><small>Gender: <span>{character.gender}</span></small></div>
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
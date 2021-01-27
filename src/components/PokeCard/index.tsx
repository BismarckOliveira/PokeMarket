import React from 'react';

import { type } from 'os';
import { CardBox, Card } from './styled';

import { PokemonProps } from '../../pages/firePage';

interface ListPokemonProps {
  list: PokemonProps[];
}

const PokeCard: React.FC<ListPokemonProps> = ({ list }: ListPokemonProps) => {
  return (
    <>
      {list.map(pokemon => (
        <CardBox key={pokemon.order}>
          <Card>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="PokemonImage" />
            <p>10,00</p>
            <hr />
            <button type="submit">ADD+</button>
          </Card>
        </CardBox>
      ))}
    </>
  );
};

export default PokeCard;

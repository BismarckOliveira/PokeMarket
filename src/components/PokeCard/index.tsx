import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { CardBox, Card } from './styled';

interface types {
  type: {
    name: string;
  };
}

export interface PokemonProps {
  id: number;
  sprites: {
    front_default: string;
  };
  name: string;
  types: types[];
}

interface ListPokemonProps {
  list: PokemonProps[];
}

const PokeCard: React.FC<ListPokemonProps> = ({ list }: ListPokemonProps) => {
  const [pokemons] = useState<PokemonProps[]>([]);

  const getRandomAmount = () => {
    const money = Math.random() * 80;
    const cents = Math.random() * 30;
    const ceil = (value: number) => {
      return Math.ceil(value);
    };
    const value = `${ceil(money)},${ceil(cents)}`;
    console.log(value);
    return value;
  };

  return (
    <>
      {list.map(pokemon => (
        <CardBox key={pokemon.id}>
          <Card>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="PokemonImage" />
            <p>R$ {getRandomAmount()}</p>
            <hr />
            <button type="submit">ADD+</button>
          </Card>
        </CardBox>
      ))}
    </>
  );
};

export default PokeCard;

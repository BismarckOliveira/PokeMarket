import React from 'react';

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
  const getRandomAmount = () => {
    const money = Math.random() * 80;
    const cents = Math.random() * 30;
    const ceil = (value: number) => {
      return Math.ceil(value);
    };
    const value = `${ceil(money)},${ceil(cents)}`;

    return value;
  };

  return (
    <>
      {list.map(pokemon => (
        <CardBox key={pokemon.id}>
          <Card>
            <h1 className="name">{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="PokemonImage" />
            <p className="value">R$ {getRandomAmount()}</p>
            <hr />
            <button className="add" type="button">
              ADD+
            </button>
          </Card>
        </CardBox>
      ))}
    </>
  );
};

export default PokeCard;

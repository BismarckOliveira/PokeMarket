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
  quantity: number;
  value: number;
}

interface ListPokemonProps {
  list: PokemonProps[];
}

const PokeCard: React.FC<ListPokemonProps> = ({ list }: ListPokemonProps) => {
  const getRandomAmount = (): number => {
    const money = Math.random() * 80;
    const ceil = (value: number) => {
      return Math.ceil(value);
    };
    const value = ceil(money);

    return value;
  };

  return (
    <>
      {list.map(pokemon => (
        <CardBox key={pokemon.id}>
          <Card>
            <h1 className="name">{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="PokemonImage" />
            <div>
              <p>R$</p>
              <p id="valor">{getRandomAmount()}</p>
            </div>
          </Card>
          <hr />
          <button className="add" type="button">
            ADD+
          </button>
        </CardBox>
      ))}
    </>
  );
};

export default PokeCard;

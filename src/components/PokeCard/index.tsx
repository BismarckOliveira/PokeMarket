import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { CardBox, Card } from './styled';

import { PokemonProps } from '../../pages/firePage';

interface ListPokemonProps {
  list: PokemonProps[];
}

const PokeCard: React.FC<ListPokemonProps> = () => {
  const [pokemons, setPokemon] = useState<PokemonProps[]>([]);
  const [list, setlist] = useState(1);
  useEffect(() => {
    const reqPokemon = async () => {
      const id = 1;
      const response = await api.get<PokemonProps>(`pokemon/${list}`);

      const pokemon = response.data;

      const type = pokemon.types.map(item => item.type.name);

      if (type[0] === 'fire') {
        setPokemon([...pokemons, pokemon]);
      }
      setlist(id + pokemon.id);
    };

    reqPokemon();
  }, [list]);

  return (
    <>
      {pokemons.map(pokemon => (
        <CardBox key={pokemon.id}>
          <Card>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="PokemonImage" />
            <p>{pokemon.types[0].type.name}</p>
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

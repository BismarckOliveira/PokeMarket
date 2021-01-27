import React, { useState, FormEvent, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';

import logoImg from '../../assets/logoImage.png';

import { Container, Navigate, ContentCard, ContentCar } from './style';

import api from '../../services/api';
import PokeCard from '../../components/PokeCard';

interface types {
  type: {
    name: string;
  };
}

export interface PokemonProps {
  order: number;
  sprites: {
    front_default: string;
  };
  name: string;
  types: types[];
}

const FirePage: React.FC = () => {
  const [newList, setNewList] = useState('');

  const [pokemons, setPokemon] = useState<PokemonProps[]>([]);

  async function loadPokemon(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<PokemonProps>(`pokemon/${newList}`);

    const pokemon = response.data;

    const type = pokemon.types.map(item => item.type.name);

    if (type[0] === 'grass') {
      console.log('pokemon de grama');
    }

    setPokemon([pokemon]);
  }

  useEffect(() => {
    const reqPokemon = async () => {
      const response = await api.get<PokemonProps>(`pokemon/2`);

      const pokemon = response.data;
    };

    reqPokemon();
  }, []);

  return (
    <>
      <Navigate>
        <img src={logoImg} alt="Logo" />
        <form onSubmit={loadPokemon} action="text">
          <fieldset>
            <input
              value={newList}
              onChange={e => setNewList(e.target.value)}
              placeholder="Digite o nome do pokemon ou seu numero da Pokedex"
              type="text"
            />
            <button type="submit">
              <ImSearch />
            </button>
          </fieldset>
        </form>
      </Navigate>
      <Container>
        <ContentCard>
          <PokeCard list={pokemons} />
        </ContentCard>
        <ContentCar>
          <h1>Carrinho</h1>
          <hr />
          <div>
            {pokemons.map(pokemon => (
              <div key={pokemon.order}>
                <img src={pokemon.sprites.front_default} alt="PokemonImage" />
                <strong>{pokemon.name}</strong>
              </div>
            ))}
            <p>10,00</p>
          </div>
          <hr />
          <div className="Total">
            <h2>Total</h2>
            <strong>100,00</strong>
          </div>
          <button type="button">Comprar</button>
        </ContentCar>
      </Container>
    </>
  );
};

export default FirePage;

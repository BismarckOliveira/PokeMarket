import React, { useState, FormEvent } from 'react';
import { ImSearch } from 'react-icons/im';

import { Link } from 'react-router-dom';
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
  id: number;
  sprites: {
    front_default: string;
  };
  name: string;
  types: types[];
}

const ThunderPage: React.FC = () => {
  const [newInput, setNewInput] = useState('');

  const [pokemons, setPokemon] = useState<PokemonProps[]>([]);

  async function loadPokemon(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<PokemonProps>(`pokemon/${newInput}`);

    const pokemon = response.data;

    const type = pokemon.types.map(item => item.type.name);

    if (type[0] === 'electric') {
      setPokemon([pokemon]);
    }
  }

  return (
    <>
      <Navigate>
        <img src={logoImg} alt="Logo" />
        <form onSubmit={loadPokemon} action="text">
          <fieldset>
            <input
              value={newInput}
              onChange={e => setNewInput(e.target.value)}
              placeholder="Digite o nome do pokemon ou seu numero da Pokedex"
              type="text"
            />
            <button type="submit">
              <ImSearch />
            </button>
          </fieldset>
        </form>
        <Link to="/">Loja de Pokemons Tipo Fogo</Link>
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
              <div key={pokemon.id}>
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

export default ThunderPage;

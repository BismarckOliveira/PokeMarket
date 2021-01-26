import React, { useState, FormEvent, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import logoImg from '../../assets/logoImage.png';
import testeImg from '../../assets/testeImg.png';
import {
  Container,
  Navigate,
  ContentCard,
  ContentCar,
  Card,
  CardBox,
} from './style';

import api from '../../services/api';

interface PokemonProps {
  name: string;
  sprites: {
    front_default: string;
  };
}

const FirePage: React.FC = () => {
  const [newList, setNewList] = useState('');
  const [pokemons, setPokemon] = useState<PokemonProps[]>([]);

  async function loadPokemon(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<PokemonProps>(`pokemon-form/${newList}`);

    console.log(response.data);

    const pokemon = response.data;

    setPokemon([pokemon]);
  }

  return (
    <>
      <Navigate>
        <img src={logoImg} alt="Logo" />
        <form onSubmit={loadPokemon} action="text">
          <fieldset>
            <input
              value={newList}
              onChange={e => setNewList(e.target.value)}
              placeholder="Digite o nome do pokemon"
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
          {pokemons.map(pokemon => (
            <CardBox key={pokemon.name}>
              <Card>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt="PokemonImage" />
                <p>R$ 10,00</p>
                <hr />
                <button type="button">ADD+</button>
              </Card>
            </CardBox>
          ))}
        </ContentCard>
        <ContentCar>
          <h1>Carrinho</h1>
          <hr />
          <div>
            {pokemons.map(pokemon => (
              <div>
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

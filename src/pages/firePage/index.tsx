import React, { useState, FormEvent, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logoImage.png';
import { Container, Navigate, ContentCard, ContentCar } from './style';
import api from '../../services/api';
import PokeCard, { PokemonProps } from '../../components/PokeCard';

const FirePage: React.FC = () => {
  const [newInput, setNewInput] = useState('');

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

  async function loadPokemon(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<PokemonProps>(`pokemon/${newInput}`);

    const pokemon = response.data;

    const type = pokemon.types.map(item => item.type.name);

    if (type[0] === 'fire') {
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
        <Link to="/thunder">Loja Tipo Electrico</Link>
      </Navigate>
      <Container>
        <ContentCard>
          <PokeCard list={pokemons} />
        </ContentCard>
        <ContentCar>
          <h1>Carrinho</h1>
          <hr />
          <div>
            <div>
              <img src="ds" alt="PokemonImage" />
              <strong>teste</strong>
            </div>
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

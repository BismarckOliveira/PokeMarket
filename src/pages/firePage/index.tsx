import React, { useState, FormEvent, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logoImage.png';
import { Container, Navigate, ContentCard } from './style';
import ShopCar from '../../components/ShopCar';
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
    } else alert('Este pokemon não é do tipo Fogo');
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
        <ShopCar />
      </Container>
    </>
  );
};

export default FirePage;

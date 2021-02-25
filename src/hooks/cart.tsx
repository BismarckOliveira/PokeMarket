import React, { useState } from 'react';
import { PokemonProps } from '../components/PokeCard';

const CartProvider: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  const addToCart = (pokemon: PokemonProps) => {
    const pokemonsExist = pokemons.find(p => p.id === pokemon.id);

    if (pokemonsExist) {
      setPokemons(
        pokemons.map(p =>
          p.id === pokemon.id ? { ...pokemon, quantity: p.quantity + 1 } : p,
        ),
      );
    } else {
      setPokemons([...pokemons, { ...pokemon, quantity: 1 }]);
    }
  };

  return <h1>hello</h1>;
};

export default CartProvider;

import React, { useState, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import logoImg from '../../assets/logoImage.png';
import testeImg from '../../assets/testeImg.png';
import { Container, Navigate, ContentCard, ContentCar } from './style';
import CardBox from '../../components/card';
import api from '../../services/api';

interface PokemonProps {
  name: string;
}

const FirePage: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonProps[]>([]);

  useEffect(() => {
    async function loadPokemon(): Promise<void> {
      const response = await api.get('/pokemon');
    }

    loadPokemon();
  }, []);

  return (
    <>
      <Navigate>
        <img src={logoImg} alt="Logo" />
        <form action="text">
          <fieldset>
            <input type="text" />
            <ImSearch type="button" />
          </fieldset>
        </form>
      </Navigate>
      <Container>
        <ContentCard>
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
        </ContentCard>
        <ContentCar>
          <h1>Carrinho</h1>
          <hr />
          <div>
            <div>
              <img src={testeImg} alt="PokemonImage" />
              <strong>Pikachu</strong>
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

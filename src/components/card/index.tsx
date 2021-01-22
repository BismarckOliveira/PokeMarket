import React from 'react';
import testeImg from '../../assets/testeImg.png';

import { Container, Card } from './style';

const CardBox: React.FC = () => {
  return (
    <>
      <Container>
        <Card>
          <h1>Pikachu</h1>
          <img src={testeImg} alt="PokemonImage" />
          <p>R$ 10,00</p>
        </Card>
      </Container>
      ;
    </>
  );
};

export default CardBox;

import React from 'react';
import { ImSearch } from 'react-icons/im';
import logoImg from '../../assets/logoImage.png';
import { Container, Navigate } from './style';
import Card from '../../components/card';

const FirePage: React.FC = () => {
  return (
    <Container>
      <Navigate>
        <img src={logoImg} alt="Logo" />
        <form action="text">
          <fieldset>
            <input type="text" />
            <ImSearch type="button" />
          </fieldset>
        </form>
      </Navigate>
      <Card />
    </Container>
  );
};

export default FirePage;

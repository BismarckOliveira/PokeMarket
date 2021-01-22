import React from 'react';
import { ImSearch } from 'react-icons/im';
import logoImg from '../../assets/logoImage.png';
import { Container, Navigate } from './style';
import CardBox from '../../components/card';
import CarShop from '../../components/carshop';

const FirePage: React.FC = () => {
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
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
        <CarShop />
      </Container>
    </>
  );
};

export default FirePage;

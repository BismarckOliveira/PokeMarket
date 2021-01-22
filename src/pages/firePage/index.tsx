import React from 'react';
import { ImUser, ImSearch } from 'react-icons/im';
import logoImg from '../../assets/logoImage.png';
import { Container, Navigate } from './style';

const FirePage: React.FC = () => {
  return (
    <Container>
      <Navigate>
        <img src={logoImg} alt="Logo" />
        <form action="text">
          <input type="text" />
          <ImSearch type="button" />
        </form>
        <div>
          <ImUser />
          <div>
            <strong>Entrar</strong>
            <p>Minha Conta</p>
          </div>
        </div>
      </Navigate>
    </Container>
  );
};

export default FirePage;

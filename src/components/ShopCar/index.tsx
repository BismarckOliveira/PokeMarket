import React from 'react';

import { Container } from './style';

const ShopCar: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Carrinho</h1>
        <hr />
        <div>
          <ul className="itens">
            <li>
              <strong>teste</strong>
              <p>10,00</p>
            </li>
          </ul>
        </div>
        <hr />
        <div className="Total">
          <h2>Total</h2>
          <strong>100,00</strong>
        </div>
        <button type="button">Comprar</button>
      </Container>
    </>
  );
};

export default ShopCar;

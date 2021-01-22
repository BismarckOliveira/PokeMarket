import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 180px;
  margin-top: 24px;
  margin-left: 24px;
  background: #ff1744;
  height: 200px;
  border-radius: 5px;
  width: 112rem;
`;

export const Card = styled.div`
  :hover {
    opacity: 0.5;
  }
  :hover img {
    transform: scale(1.1);
  }
  text-align: center;

  img {
    width: 100%;
  }
`;

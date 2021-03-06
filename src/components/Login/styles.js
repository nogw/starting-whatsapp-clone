import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
  padding: 30px;
  box-shadow: -1px 5px 22px -6px rgba(0,0,0,0.2); 
  border-radius: 6px;

  img {
    object-fit: contain;
    height: 70px;
    margin: 40px;
    margin-bottom: 60px;
  }

  h1 {
    font-size: 32px;
  }

  button {
    margin-top: 30px;
    text-transform: uppercase;
    background-color: #30b944;
    font-weight: bold;
    padding-top: 10px;
    color: #fff;
  }
`;

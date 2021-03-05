import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.66;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const Texts = styled.div`
  flex: 1;
  padding-left: 20px;

  h3 {
    margin-bottom: 4px;
    font-weight: 500;
  }

  p {
    color: gray;
  }
`;

export const Content = styled.div`
  flex: 1;
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: auto;
`;

export const Footer = styled.div`

`;

export const RightContent = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
`;

export const Message = styled.div`

`;

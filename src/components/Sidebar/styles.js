import styled from 'styled-components';

export const Container = styled.div`
  /* flex: 0.35;  */
  display: flex;
  flex-direction: column;
  flex: 0.34; 
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;

  > .MuiSvgIcon-root {
    margin-right: 2vw;
    font-size: 24px !important;
  }
`;

export const Search = styled.div`

`;

export const Chats = styled.div`

`;

export const SearchInput = styled.div`

`;
import styled from 'styled-components';

export const Container = styled.div`
  /* flex: 0.35;  */
  display: flex;
  flex-direction: column;
  flex: 0.35; 
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
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
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 44px;
  padding: 10px;
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 19px;
  width: 100%;
  height: 32px;

  > .MuiSvgIcon-root {
    color: gray;
    padding: 1px;
    margin-left: 10px;
  }

  > input {
    border: none;
    margin-left: 10px;
    outline: none;
    width: 80%;
    margin-right: 0px;
    padding-bottom: 2px;
  }
`;

export const Chats = styled.div`
  flex: 1;
  overflow: auto;
    position: relative;
  overflow-x: hidden;
  background-color: #fff;
`;
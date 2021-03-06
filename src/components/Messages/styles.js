import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.66;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const Texts = styled.div`
  flex: 1;
  padding-left: 20px;
  position: relative;
  margin-top: 4px; 

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
  }

  p {
    line-height: 16px;
    color: gray;
    margin-top: 4px;
  }
`;

export const Content = styled.div`
  flex: 1;
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: auto;

  .receiver {
    margin-left: auto;
    background-color: #dcf8c6;
    border-radius: 10px 0px 10px 10px;

    .name {
      display: none;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
`;

export const Message = styled.p`
  position: relative;
  font-size: 16px;
  padding: 10px 10px 8px 10px;
  border-radius: 0px 10px 10px 10px;
  background-color: #fff;
  width: fit-content;
  margin-bottom: 10px;

  .name {
    display: block;
    color: pink;
    margin-bottom: 4px;
    font-size: 14px;
  }

  .timesent {
    position: relative;
    top: 4px;
    color: #82b2ad;
    margin-left: 8px;
    font-size: 9px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid lightgray;

  form {
    flex: 1;
    display: flex;

    input {
      flex: 1;
      border-radius: 28px;
      padding: 10px;
      border: none;
      outline: none;
    }

    button {
      display: none;
    }
  }
`;
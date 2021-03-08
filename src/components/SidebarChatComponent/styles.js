import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 14px;
  cursor: pointer;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background-color: #ebebeb;
  }
`;

export const Button = styled.div `
  position: absolute;
  bottom: 20px;
  left: 20px;

`

export const Texts = styled.div` 
  margin-left: 15px;
  margin-top: 2px;
  
  h3 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
  }

  p {
    line-height: 18px;
    color: #676767;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 150px;
  }
`;

export const NewChatMenu = styled.div`

`; 
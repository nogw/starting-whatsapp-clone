import React from 'react';
import Sidebar from '../Sidebar';
import Messages from '../Messages'
import { Container } from './styles';

function Whatsapp() {
  return (
    <Container>
      <Sidebar/>
      <Messages />
    </Container>
  );
}

export default Whatsapp;
import React from 'react';
import { Avatar } from '@material-ui/core'
import { Container, Texts, NewChatMenu } from './styles';

function SidebarChatComponent({ newChat }) {

  const createChat = () => {
    const personName = prompt('name')

    if (personName) {
      // last
    }
  };

  return !newChat ? (
    <Container>
      <Avatar />
      <Texts>
        <h2>Kevin</h2>
        <p>pai eu so viado kk</p>
      </Texts>
    </Container>
  ) : (
    <NewChatMenu onClick={createChat}>
      <Container>
        <h2>add new chat</h2>
      </Container>
    </NewChatMenu>
  )
}

export default SidebarChatComponent;
import React, {useEffect} from 'react';
import { Avatar } from '@material-ui/core'
import { Container, Texts, NewChatMenu } from './styles';
import database from '../../firebase'
import { Link } from 'react-router-dom'

function SidebarChatComponent({id, name, newChat, room }) {

  const createChat = () => {
    const roomName = prompt('name')

    if (roomName) {
      database.collection('rooms').add({
        name: roomName,
      })
    }
  };

  return !newChat ? (
    <Link to={`/c/${id}`}>
      <Container>
        <Avatar />
        <Texts>
          <h2>{name}</h2>
          <p>pai eu so viado kk</p>
        </Texts>
      </Container>
    </Link>
  ) : (
    <NewChatMenu onClick={createChat}>
      <Container>
        <h2>add new chat</h2>
      </Container>
    </NewChatMenu>
  )
}

export default SidebarChatComponent;
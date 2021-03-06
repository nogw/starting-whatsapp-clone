import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core'
import { Container, Texts, NewChatMenu } from './styles';
import database from '../../firebase'
import { Link } from 'react-router-dom'

function SidebarChatComponent({id, name, newChat, room }) {
  const [messages, setMessages] = useState("");

  const createChat = () => {
    const roomName = prompt('name')

    if (roomName) {
      database.collection('rooms').add({
        name: roomName,
      })
    }
  };

  useEffect(() => {
    if (id) {
      database.collection('rooms')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => (
        setMessages(snapshot.docs.map((doc) => doc.data()))
      ))
    }
  }, [id])

  return !newChat ? (
    <Link to={`/c/${id}`}>
      <Container>
        <Avatar />
        <Texts>
          <h3>{name}</h3>
          <p>{messages[0]?.message}</p>
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
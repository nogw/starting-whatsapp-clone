import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons/'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

import { Container, Header, Content, Footer, Texts, RightContent, Message } from './styles';
import { useParams } from 'react-router-dom'

import database from '../../firebase'

function Messages() {
  const [input, setInput] = useState("")
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      database.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))
    }
  }, [roomId])

  const sendMessage = e => {
    e.preventDefault(e)
    console.log(`you typed => ${input}`)
    setInput("")
  }
  
  return (
    <Container>
      <Header>
        <Avatar />
        <Texts>
          <h3>
            {roomName}
          </h3>
          <p>
            Last seen at 19h...
          </p>
        </Texts>
        <RightContent>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </RightContent>
      </Header>
      
      <Content>
        <Message>
          <span className="name">kevin</span>
          in consectetur purus tristique sed. <span className="timesent">3:43pm</span>
        </Message>
        {/* message.name === user.displayName */}
        <Message className={`${true && 'receiver'}`}>
          <span className="name">kevin</span>
          sit amet, consectetur <span className="timesent">3:43pm</span>
        </Message>
      </Content>
      
      <Footer>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>

        <form>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">sent</button>
        </form>

        <IconButton>
          <MicIcon />
        </IconButton>
      </Footer>
    </Container>
  );
}

export default Messages;
import React, { useState, useEffect, useRef } from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons/'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

import { Container, Header, Content, Footer, Texts, RightContent, Message } from './styles';
import { useParams } from 'react-router-dom'

import database from '../../firebase'
import firebase from 'firebase'
import { useStateValue } from '../../ContextProvider'

function Messages() {
  const [input, setInput] = useState("")
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue()

  const contentRef = useRef(null)
  const scrollToRef = () => contentRef.current.scrollTo(0, contentRef.current.scrollTopMax)

  useEffect(() => {
    if (roomId) {
      database.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))

      database.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => 
        setMessages(snapshot.docs.map((doc) => 
          doc.data()
        ))
      );
    }
  }, [roomId])

  const sendMessage = e => {
    e.preventDefault(e)
    console.log(`you typed => ${input}`)
    console.log(user.displayName)

    database.collection('rooms')
    .doc(roomId)
    .collection('messages')
    .add({
      message: input,
      user: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
    scrollToRef()          
  }

  function timeformat(date) {
    var h = date.getHours();
    var m = date.getMinutes();
    var x = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0'+m: m;
    var mytime= h + ':' + m + x;
    return mytime;
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
            Last seen at{" "}
            {
              timeformat(new Date(messages[messages.length - 1]?.timestamp?.toDate()))
            }
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
      
      <Content ref={contentRef}>
        {
          messages.map((message) => (
            <Message key={message.id} className={`${message.user === user.displayName && 'receiver'}`}>
              <span className="name">{message.user}</span>
              {message.message}<span className="timesent">
                {
                  timeformat(new Date(message.timestamp?.toDate()))
                }
              </span>
            </Message>
          ))
        }
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
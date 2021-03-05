import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon  from '@material-ui/icons/DonutLarge'
import ChatIcon  from '@material-ui/icons/Chat'
import MoreVertIcon  from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import { Container, Header, HeaderRight, Search, Chats, SearchInput } from './styles';
import SidebarChatComponent from '../SidebarChatComponent'
import database from '../../firebase'

function Sidebar() {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    database.collection('rooms').onSnapshot((snapshot) => 
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
      }))
      )
    );
  }, [])

  return (
    <Container>
      <Header>
        <Avatar/>
        <HeaderRight>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderRight>
      </Header>
      <Search>
        <SearchInput>
          <SearchOutlined />
          {/* search or start "a new chat */}
          <input type="text" placeholder="Search chat"/>
        </SearchInput>
      </Search>
      <Chats>
        <SidebarChatComponent newChat />
        {
          rooms.map(room => (
            <SidebarChatComponent key={room.id} id={room.id} name={room.data.name} />
          ))
        }
      </Chats>
    </Container>
  );
}

export default Sidebar;
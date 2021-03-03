import React from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon  from '@material-ui/icons/DonutLarge'
import ChatIcon  from '@material-ui/icons/Chat'
import MoreVertIcon  from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import { Container, Header, HeaderRight, Search, Chats, SearchInput } from './styles';

function Sidebar() {
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

      </Chats>
    </Container>
  );
}

export default Sidebar;
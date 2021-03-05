import React from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons/'
import { Container, Header, Content, Footer, Texts, RightContent, Message } from './styles';

function Messages() {
  return (
    <Container>
      <Header>
        <Avatar />
        <Texts>
          <h3>
            Kevin
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
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </RightContent>
      </Header>
      
      <Content>
        <Message>
          Testing
        </Message>
      </Content>
      
      <Footer>

      </Footer>
    </Container>
  );
}

export default Messages;
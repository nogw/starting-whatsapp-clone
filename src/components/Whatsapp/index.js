import React from 'react';
import Sidebar from '../Sidebar';
import Messages  from '../Messages'
import { Container } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Whatsapp() {
  return (
    <Container>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/c/:roomId">
            <Messages />
          </Route>
          <Route path="/">
            <Messages />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default Whatsapp;
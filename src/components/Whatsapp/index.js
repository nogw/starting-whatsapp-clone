import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Messages  from '../Messages'
import { Container } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Whatsapp() {
  const [user, setUser] = useState(null)

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
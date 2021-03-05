import React, { useState } from 'react'
import Whatsapp from './components/Whatsapp';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {
        !user ? (
          <h1>Login</h1>
        ) : (
          <Whatsapp />
        )
      }
      <GlobalStyle />
    </>
  );
}

export default App;

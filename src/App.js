import React from 'react'
import Whatsapp from './components/Whatsapp';
import GlobalStyle from './styles/GlobalStyle';
import Login from './components/Login'
import { useStateValue } from './ContextProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()
  
  return (
    <>
      {
        !user ? (
          <Login />
        ) : (
          <Whatsapp />
        )
      }
      <GlobalStyle />
    </>
  );
}

export default App;

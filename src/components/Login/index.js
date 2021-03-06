import React from 'react';
import { Button } from '@material-ui/core';
import { Container } from './styles';
import { provider, auth } from '../../firebase'
import { useStateValue } from '../../ContextProvider'
import { actionTypes } from '../../reducer';

function Login() {
  const [{}, dispatch] = useStateValue()

  const sign = () => {
    auth.signInWithPopup(provider)
    .then((res) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: res.user,
      });
    }).catch(err => alert(err.message))
  }

  return (
    <Container>
      <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png" alt="zap" />
      <h1>Sign in Whatsapp</h1>
      <Button onClick={sign}>
        Sign In With Google
      </Button>
    </Container>
  );
}

export default Login;
import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

import Loading from '../../components/Loading/Loading';
import { ReactComponent as LoginIcon } from '../../assets/icons/auth.svg';
import { LoginContainer, FormContainer } from './Login.style';
import { useAuthService } from '../../hooks/useAuth';

export default function Login() {
  const [state, send] = useAuthService();
  const [credentials, setCredentials] = React.useState({ username: '', password: '' });
  const theme = useTheme();

  function handleClick() {
    send('LOGIN', { ...credentials });
  }

  function handleChange(e) {
    const {
      target: { name, value }
    } = e;
    setCredentials((state) => ({ ...state, [name]: value }));
  }
  const loading = state.matches({ unauthorized: 'authorizing' });

  if (loading) return <Loading />;
  return (
    <LoginContainer>
      <LoginIcon style={{ width: '100%', height: '300px' }} />
      <FormContainer noValidate autoComplete='off'>
        <TextField
          onChange={handleChange}
          fullWidth={true}
          name='username'
          style={{ marginTop: 10 }}
          variant='outlined'
          margin='normal'
          label='ΑΡΙΘΜΟΣ ΜΗΤΡΩΟΥ'
        />
        <TextField
          onChange={handleChange}
          name='password'
          fullWidth={true}
          variant='outlined'
          margin='normal'
          type='password'
          style={{ marginTop: 10 }}
          label='Κωδικός'
        />
      </FormContainer>
      <Button
        onClick={handleClick}
        style={{ padding: 10, marginTop: 10 }}
        fullWidth={true}
        variant='contained'
        color='primary'
      >
        ΣΥΝΔΕΣΗ
      </Button>
      <div style={{ marginTop: 10, textAlign: 'center', color: theme.palette.error.main }}>
        {state.context.error}
      </div>
    </LoginContainer>
  );
}

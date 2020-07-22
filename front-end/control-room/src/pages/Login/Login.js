import React from 'react';

import { TextField, Button, useTheme } from '@material-ui/core';
import { toast } from 'react-toastify';

import { ReactComponent as LoginIcon } from '../../assets/icons/auth.svg';
import Loading from '../../components/Loading/Loading';
import { useAuthService } from '../../hooks/useAuth';
import { LoginContainer, FormContainer } from './Login.style';

export default function Login() {
  const [state, send] = useAuthService();
  const value = { state };
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
  });
  const theme = useTheme();

  React.useEffect(() => {
    if (value === 'authorized') toast.success('Welcome');
  }, [value]);

  function handleSubmit() {
    send({ type: 'LOGIN', ...credentials });
  }
  function handleChange(e) {
    const {
      target: { name, value },
    } = e;
    setCredentials((state) => ({ ...state, [name]: value }));
  }
  const loading = state.matches({ unauthorized: 'authorizing' });

  if (loading) return <Loading />;
  return (
    <LoginContainer>
      <LoginIcon style={{ width: '100%', height: '300px' }} />
      <FormContainer noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          fullWidth
          name='username'
          style={{ marginTop: 10 }}
          variant='outlined'
          margin='normal'
          label='Ονομα Χρήστη'
        />
        <TextField
          onChange={handleChange}
          name='password'
          fullWidth
          variant='outlined'
          margin='normal'
          type='password'
          style={{ marginTop: 10 }}
          label='Κωδικός'
        />
        <Button
          onClick={handleSubmit}
          style={{ padding: 10, marginTop: 10 }}
          fullWidth
          variant='contained'
          color='primary'
        >
          ΣΥΝΔΕΣΗ
        </Button>
        <div
          style={{
            marginTop: 10,
            textAlign: 'center',
            color: theme.palette.error.main,
          }}
        >
          {state.context.error}
        </div>
      </FormContainer>
    </LoginContainer>
  );
}

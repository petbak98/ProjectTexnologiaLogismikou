import React from 'react';

import { TextField, Typography } from '@material-ui/core';
import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 550px;
  max-width: 100%;
  background: white;
  margin-top: 50px;
  border-radius: 4px;
  padding: 50px 50px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;
export const FormContainer = styled.form`
  background: #fff;
  display: flex;
  flex-direction: column;
  .input-container {
    margin-bottom: 5px;
  }
`;

function AdminForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Typography color='primary' align='center'>
        Προσθήκη Χρήστη
      </Typography>
      <FormContainer onSubmit={handleSubmit}>
        <div className='input-container'>
          <TextField fullWidth name='username' label='Όνομα χρήστη' style={{ marginTop: 10 }} />
        </div>
        <div className='input-container'>
          <TextField fullWidth name='firstName' label='Όνομα' />
        </div>
        <div className='input-container'>
          <TextField fullWidth name='lastName' label='Επώνυμο' />
        </div>
        <div className='input-container'>
          <TextField fullWidth name='password' label='Κωδικός' type='password' />
        </div>
      </FormContainer>
    </Container>
  );
}

export default AdminForm;

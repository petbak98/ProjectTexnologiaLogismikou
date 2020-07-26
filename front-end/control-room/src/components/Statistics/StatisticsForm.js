import React from 'react';

import { Typography, TextField, Button } from '@material-ui/core';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 550px;
  max-width: 100%;
  background: white;
  border-radius: 4px;
  padding: 50px 50px;
`;
const FormContainer = styled.form`
  background: inherit;
  display: flex;
  flex-direction: column;
  .input-container {
    margin-bottom: 5px;
  }
`;
function StatisticsForm({ handleSubmit }) {
  const [form, setForm] = React.useState({ deaths: 0, injuries: 0 });

  function submit(e) {
    e.preventDefault();
    handleSubmit(form);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value > 0 ? e.target.value : 0 });
  }

  return (
    <Container>
      <Typography color='primary' align='center'>
        Προσθήκη Στατιστικών
      </Typography>
      <FormContainer onSubmit={submit}>
        <div className='input-container'>
          <TextField
            value={form.deaths}
            type='number'
            onChange={handleChange}
            fullWidth
            name='deaths'
            label='Θάνατοι'
            style={{ marginTop: 10 }}
            aria-valuemin={0}
          />
        </div>
        <div className='input-container'>
          <TextField
            onChange={handleChange}
            type='number'
            value={form.injuries}
            fullWidth
            aria-valuemin={0}
            name='injuries'
            label='Τραυματισμοί'
            style={{ marginTop: 10 }}
          />
        </div>
        <Button onClick={submit} style={{ marginTop: 10 }} color='primary' variant='contained'>
          Κλεισιμο
        </Button>
      </FormContainer>
    </Container>
  );
}

export default StatisticsForm;

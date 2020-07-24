import React from 'react';

import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { toast } from 'react-toastify';

import useMutateReport from '../../../hooks/useMutateReport';
import useQuerySuccess from '../../../hooks/useQuerySuccess';

function ReportEditForm({ report, callback }) {
  const [form, setForm] = React.useState({
    incidentTitle: report.incidentTitle,
    content: report?.content,
  });
  const { status, mutate } = useMutateReport(report);
  useQuerySuccess(status);

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.incidentTitle.trim() <= 0 || form.content.trim() <= 0) {
      toast.error('Συμπλήρωσε την φόρμα');
      return;
    }
    await mutate({ ...report, ...form });
    setForm({ incidentTitle: '', content: '' });
    callback();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction='column'>
        <Typography style={{ fontSize: 16, fontWeight: 'bold' }} color='primary'>
          Τίτλο
        </Typography>
        <TextField
          name='incidentTitle'
          size='small'
          value={form.incidentTitle}
          variant='outlined'
          onChange={handleChange}
          placeholder='Δώσε τίτλο'
        />
        <TextField
          onChange={handleChange}
          style={{ marginTop: 10 }}
          variant='outlined'
          name='content'
          multiline
          rows={4}
          placeholder='Δώσε περιεχόμενο'
          value={form.content}
        />
        <Button type='submit' style={{ marginTop: 10 }} variant='contained' color='primary'>
          Αποθηκευση
        </Button>
      </Grid>
    </form>
  );
}

export default ReportEditForm;

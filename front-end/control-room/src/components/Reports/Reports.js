import React from 'react';

import { Grid } from '@material-ui/core';

import Report from './Report';

function Reports({ reports }) {
  console.log(reports);
  return (
    <Grid style={{ padding: 20 }} alignItems='center' container direction='column'>
      {reports.map((report) => (
        <Report key={report.reportId} report={report} />
      ))}
    </Grid>
  );
}

export default Reports;

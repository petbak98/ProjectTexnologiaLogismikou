import React from 'react';

import { Grid } from '@material-ui/core';

import { hasAlreadySubmitted } from '../../utils';
import ReportForm from '../Service/ReportForm/ReportForm';
import Report from './Report';

function Reports({ reports, incidentId, userId }) {
  const canEdit = hasAlreadySubmitted(userId, reports);
  return (
    <>
      <Grid
        style={{ paddingTop: 15, paddingBottom: 15 }}
        alignItems='center'
        container
        direction='column'
      >
        {reports.map((report) => (
          <Report key={report.reportId} report={report} userId={userId} />
        ))}
      </Grid>
      {!canEdit && <ReportForm userId={userId} incidentId={incidentId} />}
    </>
  );
}

export default Reports;

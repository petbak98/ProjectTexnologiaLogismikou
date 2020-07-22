import React from 'react';

import { Grid } from '@material-ui/core';

import { useAuthService } from '../../hooks/useAuth';
import { hasAlreadySubmitted } from '../../utils';
import Can from '../Permissions/Can';
import ReportForm from '../Service/ReportForm/ReportForm';
import Report from './Report';

function Reports({ reports, incidentId, userId }) {
  const [authState] = useAuthService();
  const { roles } = authState.context.user;
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
      {!canEdit && (
        <Can
          yes={<ReportForm userId={userId} incidentId={incidentId} />}
          no={null}
          roles={roles}
          resource='incident'
          action='addReport'
        />
      )}
    </>
  );
}

export default Reports;

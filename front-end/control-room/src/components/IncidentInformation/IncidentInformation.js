import React from 'react';

import styled from 'styled-components';

import { InformationItem } from '../../shared';

const Container = styled.ul`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 5px;
  }
`;

function IncidentInformation({
  incidentId,
  completed,
  region,
  street,
  number,
  timeStamp,
  creationTimestamp,
  receivers = [],
  notes,
}) {
  return (
    <Container>
      <InformationItem label='ID' value={incidentId} />
      <InformationItem label='Περιοχή' value={region} />
      <InformationItem label='Οδός' value={`${street} ${number}`} />
      <InformationItem label='Hμ.Δημιουργίας' value={timeStamp} />
      <InformationItem label='Ολοκληρωμένο' value={`${completed ? 'Ναι' : 'Όχι'}`} />
      <InformationItem label='Σημειώσεις' value={notes} />
      <InformationItem label='Ημ.Δημιουργίας' value='TODO' />
      {receivers.map((receiver, index) => (
        <InformationItem key={receiver.id} label={`Αποδέκτης ${index}`} value={receiver.username} />
      ))}
    </Container>
  );
}

export default IncidentInformation;

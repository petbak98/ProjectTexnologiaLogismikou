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
  creationTimestamp,
  receivers = [],
  notes,
}) {
  const parsedDate = creationTimestamp.substring(0, 10);
  return (
    <Container>
      <InformationItem label='ID' value={incidentId} />
      <InformationItem label='Περιοχή' value={region} />
      <InformationItem label='Οδός' value={`${street} ${number}`} />
      <InformationItem label='Hμ.Δημιουργίας' value={parsedDate} />
      <InformationItem label='Ολοκληρωμένο' value={`${completed ? 'Ναι' : 'Όχι'}`} />
      <InformationItem label='Σημειώσεις' value={notes} />
      {receivers.map((receiver, index) => (
        <InformationItem key={index} label={`Αποδέκτης ${index}`} value={receiver.username} />
      ))}
    </Container>
  );
}

export default IncidentInformation;

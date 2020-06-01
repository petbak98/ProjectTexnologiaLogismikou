import React from 'react';
import styled from 'styled-components/macro';

import theme from '../../config/theme';
import { InformationItem } from '../../shared';

const CreatorContainer = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  color: ${theme.palette.primary.main};
`;

const CreatorInfoItem = styled.li`
  margin-bottom: 8px;
  :last-child {
    margin-bottom: 0;
  }
`;

export default function CreatorInformation({
  callerFirstName,
  callerLastName,
  callerPhone,
  callerNationalId,
  coordinatorName,
}) {
  return (
    <CreatorContainer>
      <CreatorInfoItem>
        <InformationItem label='Όνομα' value={callerFirstName} />
      </CreatorInfoItem>
      <CreatorInfoItem>
        <InformationItem label='Επώνυμο' value={callerLastName} />
      </CreatorInfoItem>
      <CreatorInfoItem>
        <InformationItem label='Τηλέφωνο' value={callerPhone} />
      </CreatorInfoItem>
      <CreatorInfoItem>
        <InformationItem label='Εθνικότητα' value={callerNationalId} />
      </CreatorInfoItem>
      <CreatorInfoItem>
        <InformationItem label='Καταχωρήθηκε από' value={coordinatorName} />
      </CreatorInfoItem>
    </CreatorContainer>
  );
}

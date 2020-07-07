import React from 'react';

import { useParams } from 'react-router-dom';

import { InformationIcon, ReportsIcon, UserIcon } from '../../assets/icons';
import useIncidentById from '../../hooks/useIncidentById';
import useTabs from '../../hooks/useTabs';
import { Avatar } from '../../shared';
import CreatorInformation from '../CreatorInformation/CreatorInformation';
import IncidentInformation from '../IncidentInformation/IncidentInformation';
import Loading from '../Loading/Loading';
import Stars from '../Stars/Stars';
import Status from '../Status/Status';
import {
  AvatarContainer,
  CodeContainer,
  Container,
  CreatorContainer,
  HeaderContainer,
  IncidentNavigation,
  Label,
  Li,
  Seperator,
  StatusContainer,
  TabsContainer,
  TitleContainer,
} from './Incident.style';

function Incident() {
  const { id } = useParams();
  const { data, status } = useIncidentById(id);
  const {
    callerFirstName,
    callerLastName,
    callerPhone,
    callerNationalId,
    coordinatorName,
    incidentId,
    number,
    street,
    status: incStatus,
    importance,
    notes,
    receivers,
    authority,
    title,
    region,
  } = data || {};
  const IncidentNavContent = [
    {
      tag: 'Δημιουργός',
      Icon: UserIcon,
      content: (
        <CreatorInformation
          callerFirstName={callerFirstName}
          callerLastName={callerLastName}
          callerPhone={callerPhone}
          callerNationalId={callerNationalId}
          coordinatorName={coordinatorName}
        />
      ),
    },
    {
      tag: 'Πληροφορίες',
      Icon: InformationIcon,
      content: (
        <IncidentInformation
          receivers={receivers}
          notes={notes}
          region={region}
          street={street}
          number={number}
          incidentId={incidentId}
          completed={incStatus?.completed}
        />
      ),
    },
    { tag: 'Αναφορές', Icon: ReportsIcon, content: 'test2' },
  ];

  const { currentTab, changeTab, currentIndex } = useTabs(0, IncidentNavContent);

  function changeActiveTab(index) {
    changeTab(index);
  }
  if (status === 'loading') return <Loading />;
  console.log(authority);
  return (
    <Container>
      <AvatarContainer>
        <Avatar className='avatar-absolute' id={authority.id} />
      </AvatarContainer>
      <HeaderContainer>
        <Stars startsCount={importance.id} />
        <h4 style={{ marginLeft: 5 }}>{title}</h4>
        <Seperator big />
        <h4>{id}</h4>
      </HeaderContainer>
      <Status status={incStatus.completed} />
      <IncidentNavigation>
        {IncidentNavContent.map((tab, index) => (
          <Li key={index} onClick={() => changeActiveTab(index)} active={index === currentIndex}>
            <tab.Icon className='tab-icon' />
            <p>{tab.tag}</p>
          </Li>
        ))}
      </IncidentNavigation>
      <TabsContainer>{currentTab.content}</TabsContainer>
    </Container>
  );
}

export default Incident;

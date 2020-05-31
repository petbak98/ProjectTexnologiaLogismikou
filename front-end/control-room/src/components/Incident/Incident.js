import React from 'react';
import { useParams } from 'react-router-dom';

import useIncidentById from '../../hooks/useIncidentById';
import Loading from '../Loading/Loading';
import {
  Li,
  HeaderContainer,
  Seperator,
  Container,
  TitleContainer,
  CreatorContainer,
  CodeContainer,
  StatusContainer,
  Label,
  AvatarContainer,
  IncidentNavigation,
} from './Incident.style';
import Stars from '../Stars/Stars';
import { Avatar } from '../../shared';
import { ReportsIcon, InformationIcon, UserIcon } from '../../assets/icons';
import useTabs from '../../hooks/useTabs';

const IncidentNavContent = [
  { tag: 'Δημιουργός', Icon: UserIcon, content: 'test' },
  { tag: 'Πληροφορίες', Icon: InformationIcon, content: 'test1' },
  { tag: 'Αναφορές', Icon: ReportsIcon, content: 'test2' },
];

function Incident() {
  const { id } = useParams();
  const { currentTab, changeTab, currentIndex } = useTabs(
    0,
    IncidentNavContent,
  );

  function changeActiveTab(index) {
    changeTab(index);
  }

  const { data, status } = useIncidentById(id);
  const {
    incidentId, status: incStatus, importance, authority, title,
  } = data || {};

  if (status === 'loading') return <Loading />;
  return (
    <Container>
      <HeaderContainer>
        <h4>{title}</h4>
        <Seperator big />
        <h4>{id}</h4>
      </HeaderContainer>
      <IncidentNavigation>
        {IncidentNavContent.map((tab, index) => (
          <Li
            key={tab.content}
            onClick={() => changeActiveTab(index)}
            active={index === currentIndex}
          >
            <tab.Icon className="tab-icon" />
            <p>{tab.tag}</p>
          </Li>
        ))}
      </IncidentNavigation>
    </Container>
  );
}

export default Incident;

{
  /* <Container>
      <TitleContainer>
        <CodeContainer>
          <div>Κωδικός Περιστατικού:</div>
          <h4>
            <span>{incidentId}</span>
          </h4>
        </CodeContainer>
        <StatusContainer>
          <Label>{incStatus.completed ? 'Κλειστό' : 'Ανοιχτό'}</Label>
          <Seperator />
          <Label>
            <span>Προτεραιότητα</span>
          </Label>
          <Stars startsCount={importance.id} />
        </StatusContainer>
      </TitleContainer>
      <CreatorContainer>
        <AvatarContainer>
          <Avatar className="avatar-absolute" id={authority.id} />
        </AvatarContainer>
        <CodeContainer>
          <div>Tίτλος:</div>
          <h4>
            <span>{title}</span>
          </h4>
        </CodeContainer>
      </CreatorContainer>
    </Container> */
}

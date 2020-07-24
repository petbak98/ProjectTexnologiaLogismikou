import React from 'react';

import { Button } from '@material-ui/core';
import { useParams, Redirect, useHistory } from 'react-router-dom';

import { InformationIcon, ReportsIcon, UserIcon } from '../../assets/icons';
import { useAuthService } from '../../hooks/useAuth';
import useEditIncident from '../../hooks/useEditIncident';
import useIncidentById from '../../hooks/useIncidentById';
import useQuerySuccess from '../../hooks/useQuerySuccess';
import useTabs from '../../hooks/useTabs';
import { Avatar } from '../../shared';
import { ableToClose } from '../../utils';
import CreatorInformation from '../CreatorInformation/CreatorInformation';
import ConfirmationDialog from '../Dialogs/ConfirmationDialog';
import IncidentInformation from '../IncidentInformation/IncidentInformation';
import Loading from '../Loading/Loading';
import Can from '../Permissions/Can';
import Reports from '../Reports/Reports';
import Stars from '../Stars/Stars';
import Status from '../Status/Status';
import {
  AvatarContainer,
  Container,
  HeaderContainer,
  IncidentNavigation,
  Li,
  Seperator,
  TabsContainer,
} from './Incident.style';

function Incident() {
  const history = useHistory();
  const [activeModals, setActiveModals] = React.useState({ close: false, delete: false });
  const { id } = useParams();
  const { mutate, status: closeStatus } = useEditIncident();
  const { data, status } = useIncidentById(id);
  const [state] = useAuthService();
  const { user } = state.context;
  const {
    reports,
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

  console.log(activeModals);
  function closeModal(type) {
    setActiveModals({ ...activeModals, [type]: false });
  }

  function openModal(type) {
    console.log(type);
    setActiveModals({ ...activeModals, [type]: true });
  }

  function redirectToHomepage() {
    history.push('/');
  }

  useQuerySuccess(closeStatus, redirectToHomepage);
  const isLoading = closeStatus === 'loading';

  async function closeIncident() {
    const params = { ...data, status: { id: 2, completed: 1 } };
    await mutate(params);
  }
  const canBeClosed = ableToClose(reports);
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
    {
      tag: 'Αναφορές',
      Icon: ReportsIcon,
      content: <Reports userId={user.id} incidentId={incidentId} reports={reports} />,
    },
  ];

  const { currentTab, changeTab, currentIndex } = useTabs(0, IncidentNavContent);

  function changeActiveTab(index) {
    changeTab(index);
  }

  if (status === 'loading') return <Loading />;

  // if (!isServiceUserInvolved(user.id, receivers)) return <Redirect to='/' />;

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
      <div style={{ display: 'flex', marginLeft: 'auto' }}>
        <Can
          yes={
            <Button
              onClick={() => {
                openModal('delete');
              }}
              color='primary'
              variant='text'
              style={{ marginLeft: 'auto' }}
              disabled={isLoading}
            >
              Διαγραφη
            </Button>
          }
          no={null}
          resource='incident'
          action='close'
          roles={user.roles}
        />
        {canBeClosed && (
          <Can
            yes={
              <Button
                onClick={() => {
                  openModal('close');
                }}
                color='primary'
                variant='contained'
                style={{ marginLeft: '10px' }}
                disabled={isLoading}
              >
                Κλεισιμο
              </Button>
            }
            no={null}
            resource='incident'
            action='close'
            roles={user.roles}
          />
        )}
      </div>
      <ConfirmationDialog
        message='Είσαι σίγουρος ότι θέλεις να κλείσεις το συμβάν;'
        isOpen={activeModals.close}
        close={() => {
          closeModal('close');
        }}
        callback={closeIncident}
      />
      <ConfirmationDialog
        message='Είσαι σίγουρος ότι θέλεις να διαγράψεις το συμβάν;'
        isOpen={activeModals.delete}
        close={() => {
          closeModal('delete');
        }}
        callback={closeIncident}
      />
    </Container>
  );
}

export default Incident;

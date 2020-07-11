import React from 'react';

import { Route } from 'react-router-dom';

import { AnimatedRoutes } from '../../animation/AnimatedRoutes';
import FeedCC from '../../components/CommandCenter/FeedCC/FeedCC';
import InfoDialog from '../../components/Dialogs/InfoDialog';
import Incident from '../../components/Incident/Incident';
import { Layout } from '../../components/Layout/Layout';
import Notifications from '../../components/Notifications/Notifications';
import AcceptedIncidents from '../../components/Service/AcceptedIncidents/AcceptedIncidents';
import NavbarService from '../../components/Service/NavbarService';
import { WithAnimation } from '../../hoc/withAnimation';
import { useAuthService } from '../../hooks/useAuth';
import useUpdateLocation from '../../hooks/useUpdateLocation';

const AnimatedAcceptedIncindents = WithAnimation(AcceptedIncidents);
const Feed = WithAnimation(FeedCC);
const AnimatedIncident = WithAnimation(Incident);
const AnimatedNotifications = WithAnimation(Notifications);

export default function ServiceRoutes() {
  const [auth] = useAuthService();
  const { id } = auth.context.user;
  const { error, status, geolocation } = useUpdateLocation({ id });
  if (status === 'error') return <div>{error}</div>;
  return (
    <>
      <NavbarService />
      {!geolocation.error ? (
        <Layout>
          <AnimatedRoutes exitBeforeEnter initial={false}>
            <Route exact path='/accepted'>
              <AnimatedAcceptedIncindents />
            </Route>
            <Route exact path='/incidents/:id'>
              <AnimatedIncident />
            </Route>
            <Route exact path='/new'>
              <AnimatedNotifications />
            </Route>
            <Route path='/'>
              <Feed />
            </Route>
          </AnimatedRoutes>
        </Layout>
      ) : (
        <InfoDialog
          title='Τοποθεσία'
          content='Για να λειτουργήσει η εφαρμογή είναι απαραίτητο να επιτρεψέτε στην εφαρμογή να ανιχνεύει την τοποθεσία σας'
        />
      )}
    </>
  );
}

import React from 'react';

import { Route } from 'react-router-dom';

import { AnimatedRoutes } from '../../animation/AnimatedRoutes';
import AdminForm from '../../components/Admin/AdminForm';
import NavbarAdmin from '../../components/Admin/NavbarAdmin';
import Stats from '../../components/Admin/Stats';
import UsersList from '../../components/Admin/UsersList';
import FeedCC from '../../components/CommandCenter/FeedCC/FeedCC';
import FormCC from '../../components/CommandCenter/FormCC/FormCC';
import Incident from '../../components/Incident/Incident';
import { Layout } from '../../components/Layout/Layout';
import { WithAnimation } from '../../hoc/withAnimation';

const IncidentsForm = WithAnimation(FormCC);
const Users = WithAnimation(UsersList);
const CreateUserForm = WithAnimation(AdminForm);
const Feed = WithAnimation(FeedCC);
const Statistics = WithAnimation(Stats);
const AnimatedIncident = WithAnimation(Incident);

export default function ContronCenterRoutes() {
  return (
    <>
      <NavbarAdmin />
      <Layout>
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <Route exact path='/'>
            <Users />
          </Route>
          <Route exact path='/create-user'>
            <CreateUserForm />
          </Route>
          <Route exact path='/stats'>
            <Statistics />
          </Route>
          <Route exact path='/incidents/:id'>
            <AnimatedIncident />
          </Route>
          <Route exact path='/form'>
            <IncidentsForm />
          </Route>
          <Route path='/incidents'>
            <Feed />
          </Route>
        </AnimatedRoutes>
      </Layout>
    </>
  );
}

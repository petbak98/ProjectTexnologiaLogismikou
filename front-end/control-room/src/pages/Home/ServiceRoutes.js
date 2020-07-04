import React from 'react';

import { Route } from 'react-router-dom';

import { AnimatedRoutes } from '../../animation/AnimatedRoutes';
import FeedCC from '../../components/CommandCenter/FeedCC/FeedCC';
import FormCC from '../../components/CommandCenter/FormCC/FormCC';
import NavbarCC from '../../components/CommandCenter/NavbarCC/NavbarCC';
import Incident from '../../components/Incident/Incident';
import { Layout } from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import { WithAnimation } from '../../hoc/withAnimation';
import { useAuthService } from '../../hooks/useAuth';
import useUpdateLocation from '../../hooks/useUpdateLocation';

const Form = WithAnimation(FormCC);
const Feed = WithAnimation(FeedCC);
const AnimatedIncident = WithAnimation(Incident);

export default function ServiceRoutes() {
  const [auth] = useAuthService();
  const { id } = auth.context.user;
  const { status, data, isFetching } = useUpdateLocation({ id });
  console.log(status, data, isFetching);
  if (status === 'loading') return <Loading />;
  if (status === 'error') return <div>error</div>;
  if (!data) return <div>Πρέπει να ενεργοιποιήσεις την τοποθεσία σου</div>;
  return (
    <>
      <NavbarCC />
      <Layout>
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <Route exact path='/accepted'>
            <div>accepted incidents</div>
          </Route>
          <Route exact path='/incidents/:id'>
            <AnimatedIncident />
          </Route>
          <Route path='/'>
            <div>feed</div>
          </Route>
        </AnimatedRoutes>
      </Layout>
    </>
  );
}

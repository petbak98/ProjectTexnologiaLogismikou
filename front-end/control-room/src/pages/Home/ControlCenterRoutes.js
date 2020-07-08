import React from 'react';

import { Route } from 'react-router-dom';

import { AnimatedRoutes } from '../../animation/AnimatedRoutes';
import FeedCC from '../../components/CommandCenter/FeedCC/FeedCC';
import FormCC from '../../components/CommandCenter/FormCC/FormCC';
import NavbarCC from '../../components/CommandCenter/NavbarCC/NavbarCC';
import Incident from '../../components/Incident/Incident';
import { Layout } from '../../components/Layout/Layout';
import { WithAnimation } from '../../hoc/withAnimation';

const Form = WithAnimation(FormCC);
const Feed = WithAnimation(FeedCC);
const AnimatedIncident = WithAnimation(Incident);
export default function ContronCenterRoutes() {
  return (
    <>
      <NavbarCC />
      <Layout>
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <Route exact path='/form'>
            <Form />
          </Route>
          <Route exact path='/incidents/:id'>
            <AnimatedIncident />
          </Route>
          <Route path='/'>
            <Feed />
          </Route>
        </AnimatedRoutes>
      </Layout>
    </>
  );
}

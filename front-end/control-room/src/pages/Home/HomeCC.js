import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedRoutes } from '../../animation/AnimatedRoutes';

import FeedCC from '../../components/CommandCenter/FeedCC/FeedCC';
import NavbarCC from '../../components/CommandCenter/NavbarCC/NavbarCC';
import { Layout } from '../../components/Layout/Layout';
import FormCC from '../../components/CommandCenter/FormCC/FormCC';
import { WithAnimation } from '../../hoc/withAnimation';

import Incident from '../../components/Incident/Incident';

const Form = WithAnimation(FormCC);
const Feed = WithAnimation(FeedCC);
const AnimatedIncident = WithAnimation(Incident);
export default function HomeCC() {
  return (
    <>
      <NavbarCC />
      <Layout>
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <Route exact path="/form">
            <Form />
          </Route>
          {/* <Route exact path='/incidents/:id' children={<AnimatedIncident />} /> */}
          <Route exact path="/incidents/:id">
            <AnimatedIncident />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </AnimatedRoutes>
      </Layout>
    </>
  );
}

import React from 'react';
import { AnimatedRoutes } from '../../animation/AnimatedRoutes';

import { Route } from 'react-router-dom';
import FeedCC from '../../components/CommandCenter/FeedCC/FeedCC';
import NavbarCC from '../../components/CommandCenter/NavbarCC/NavbarCC';
import { Layout } from '../../components/Layout/Layout';
import FormCC from '../../components/CommandCenter/FormCC/FormCC';
import { WithAnimation } from '../../hoc/withAnimation';

const Form = WithAnimation(FormCC);
const Feed = WithAnimation(FeedCC);

export default function HomeCC() {
  return (
    <>
      <NavbarCC />
      <Layout>
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <Route exact path='/form'>
            <Form />
          </Route>
          <Route path='/'>
            <Feed />
          </Route>
        </AnimatedRoutes>
      </Layout>
    </>
  );
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FeedCC from '../../components/CommandCenter/FeedCC/FeedCC';
import NavbarCC from '../../components/CommandCenter/NavbarCC/NavbarCC';
import { Layout } from '../../components/Layout/Layout';
import FormCC from '../../components/CommandCenter/FormCC/FormCC';

export default function HomeCC() {
  return (
    <>
      <NavbarCC />
      <Layout>
        <Switch>
          <Route exact path='/form'>
            <FormCC />
          </Route>
          <Route path='/'>
            <FeedCC />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

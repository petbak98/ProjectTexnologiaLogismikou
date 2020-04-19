import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import FeedCC from '../../components/CommandCenter/FeeedCC/FeedCC';
import NavbarCC from '../../components/CommandCenter/NavbarCC/NavbarCC';
import { Layout } from '../../components/Layout/Layout';
export default function HomeCC() {
  let match = useRouteMatch();
  return (
    <>
      <NavbarCC />
      <Layout>
        <Switch>
          <Route path={`${match.path}/feed`}>
            <FeedCC />
          </Route>
          <Route path={`${match.path}`}>
            <div>error</div>
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

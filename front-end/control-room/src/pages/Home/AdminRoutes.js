import React from 'react';

import { Route } from 'react-router-dom';

import { AnimatedRoutes } from '../../animation/AnimatedRoutes';
import AdminForm from '../../components/Admin/AdminForm';
import NavbarAdmin from '../../components/Admin/NavbarAdmin';
import UsersList from '../../components/Admin/UsersList';
import { Layout } from '../../components/Layout/Layout';
import { WithAnimation } from '../../hoc/withAnimation';

const Users = WithAnimation(UsersList);
const Form = WithAnimation(AdminForm);
export default function ContronCenterRoutes() {
  return (
    <>
      <NavbarAdmin />
      <Layout>
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <Route exact path='/'>
            <Users />
          </Route>
          <Route exact path='/form'>
            <Form />
          </Route>
        </AnimatedRoutes>
      </Layout>
    </>
  );
}

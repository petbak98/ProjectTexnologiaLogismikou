import { Machine } from 'xstate';

const user = {
  username: 'test',
  role: 'cc'
};

export const AuthMachine = Machine({
  id: 'authMachine',
  initial: user ? 'authorized' : 'unauthorized ',
  context: {
    user: user ? user : undefined
  },
  states: {
    authorized: {},
    unauthorized: {}
  }
});

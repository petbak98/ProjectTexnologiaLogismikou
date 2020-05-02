import { Machine, assign } from 'xstate';

const user = {
  username: 'test',
  role: 'cc'
};

export const AuthMachine = Machine(
  {
    id: 'authMachine',
    initial: user ? 'authorized' : 'unauthorized ',
    context: {
      user: user ? user : undefined
    },
    states: {
      authorized: {
        on: {
          LOGOUT: {
            target: 'unauthorized',
            actions: 'clearUser'
          }
        },
        exit: 'clearLocalStorage'
      },
      unauthorized: {}
    }
  },
  {
    actions: {
      clearUser: assign({ user: undefined }),
      clearLocalStorage: (_, __) => {
        localStorage.clear();
      }
    }
  }
);

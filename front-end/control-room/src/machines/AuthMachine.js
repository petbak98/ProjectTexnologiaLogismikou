import { Machine, assign } from 'xstate';
import Axios from 'axios';
import { API } from '../config/config.utils';
const user = {
  username: 'test',
  role: 'cc'
};

export const AuthMachine = Machine(
  {
    id: 'authMachine',
    initial: 'unauthorized',
    context: {
      user: undefined,
      username: '',
      password: ''
    },
    states: {
      authorized: {
        on: {
          LOGOUT: {
            target: 'authorized',
            actions: 'clearUser'
          }
        },
        exit: 'clearLocalStorage'
      },
      unauthorized: {
        initial: 'idle',
        states: {
          idle: {
            on: {
              LOGIN: {
                target: 'authorizing',
                actions: 'assignCred'
              }
            }
          },
          authorizing: {
            invoke: {
              id: 'loginService',
              src: 'login',
              onDone: {
                target: '#authMachine.authorized',
                actions: 'assignUser'
              },
              onError: {
                target: '#authMachine.authorized',
                actions: 'assignUser'
              }
            }
          }
        }
      }
    }
  },
  {
    actions: {
      clearUser: assign({ user: undefined }),
      clearLocalStorage: (_, __) => {
        localStorage.clear();
      },
      //need to assign user from e.data
      assignUser: assign((ctx, e) => {
        console.log(e);
        return { ...ctx, user };
      }),
      assignCred: assign((ctx, e) => ({
        ...ctx,
        username: e.username,
        password: e.password
      }))
    },
    services: {
      login: async (ctx, e) => {
        console.log(`${API}login`);
        const result = await Axios.post(`${API}login`, {
          username: ctx.username,
          password: ctx.password
        });
      }
    }
  }
);

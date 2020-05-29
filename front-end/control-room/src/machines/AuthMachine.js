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
      password: '',
      error: ''
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
                target: 'idle',
                actions: 'assignError'
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
      assignError: assign((ctx, e) => {
        console.log(e);
        return { ...ctx, error: e.data.message };
      }),
      //need to assign user from e.data
      assignUser: assign((ctx, e) => {
        // return { ...ctx, user };
      }),
      assignCred: assign((ctx, e) => ({
        ...ctx,
        username: e.username,
        password: e.password
      }))
    },
    services: {
      login: async (ctx, e) => {
        const result = await Axios.post(
          `${API}control-center/api/auth/signin`,
          {
            username: ctx.username,
            password: ctx.password
          },
          { headers: { 'Access-Control-Allow-Origin': '*' } }
        );
        return result;
      }
    }
  }
);

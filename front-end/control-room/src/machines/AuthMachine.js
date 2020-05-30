import { Machine, assign } from 'xstate';
import Axios from 'axios';
import { API } from '../config/config.utils';

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
            target: 'unauthorized',
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
                actions: 'assignCred',
                target: 'authorizing'
              }
            }
          },
          authorizing: {
            invoke: {
              id: 'loginService',
              src: 'login',
              onDone: {
                target: '#authMachine.authorized',
                actions: ['assignUser']
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
        const message = e?.data?.response?.data?.message;
        return { ...ctx, error: message ? message : e.data.message };
      }),
      assignUser: assign((ctx, e) => {
        const user = {
          username: e.data.username,
          latitude: e.data.latitude,
          longitude: e.data.longitude,
          accessToken: e.data.accessToken,
          roles: e.data.roles,
          id: e.data.id
        };
        return { ...ctx, user, username: '', password: '' };
      }),
      assignCred: assign((ctx, e) => {
        return { ...ctx, username: e.username, password: e.password };
      })
    },
    services: {
      login: async (ctx, e) => {
        const result = await Axios.post(`${API}control-center/api/auth/signin`, {
          username: ctx.username,
          password: ctx.password
        });
        return result.data;
      }
    }
  }
);

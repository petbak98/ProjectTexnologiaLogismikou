import { Machine } from 'xstate';

export const StepsMachine = Machine({
  id: 'stepsMachine',
  initial: 'idle',
  states: {
    idle: {
      on: {
        EVENT: {
          actions: (_, event) => {
            event.nextStep();
          },
        },
      },
    },
  },
});

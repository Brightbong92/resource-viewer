import { configureStore } from '@reduxjs/toolkit';
import resource from './resource';

export const store = configureStore({
  reducer: {
    resource,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

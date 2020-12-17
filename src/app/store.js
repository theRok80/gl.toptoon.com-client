import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import logger from 'redux-logger';

const middlewares = [];
if (process.env.NODE_ENV) {
  middlewares.push(logger);
}

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: middlewares
});
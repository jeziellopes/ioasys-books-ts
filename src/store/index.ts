import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './index.ducks';
import Sagas from './index.sagas';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
    logger,
  ),
  sagaMiddleware,
];

const store = configureStore({
  reducer: {
    ...reducers,
  },
  middleware,
});

sagaMiddleware.run(Sagas);

export default store;

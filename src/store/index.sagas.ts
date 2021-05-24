import { all } from 'redux-saga/effects';
import * as authSagas from './auth/auth.sagas';

function* Sagas() {
  yield all([authSagas.watchSagas()]);
}

export default Sagas;

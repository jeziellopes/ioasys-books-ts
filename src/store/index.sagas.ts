import { all } from 'redux-saga/effects';
import * as authSagas from './auth/auth.sagas';
import * as booksSagas from './books/books.sagas';

function* Sagas() {
  yield all([authSagas.watchSagas(), booksSagas.watchSagas()]);
}

export default Sagas;

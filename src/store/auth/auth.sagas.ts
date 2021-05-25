import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'services/api';
import { setAccessToken, removeStorage } from 'lib/contexts/auth';
import { SIGN_IN } from 'constants/endpoints';
import { login, loginError, loginSuccess, logout } from './auth.ducks';

export function* signIn({ payload }: ReturnType<typeof login>) {
  try {
    const { data, headers } = yield api.post(SIGN_IN, payload);

    if (data !== undefined) {
      yield call(setAccessToken, {
        accessToken: headers.authorization,
        refreshToken: headers['refresh-token'],
        name: data.name,
        firstname: data.name.split(' ')[0],
        email: data.email,
      });
      yield put({ type: loginSuccess.type });
    }
  } catch (error) {
    yield put({ type: loginError.type });
  }
}

export function* logoutUser() {
  yield call(removeStorage);
}

export function* watchSagas() {
  yield takeLatest(login.type, signIn);
  yield takeLatest(logout.type, logoutUser);
}

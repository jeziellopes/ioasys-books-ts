import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RootState } from 'store';
import { loadBooksSuccess } from 'store/books/books.ducks';
import api from 'services/api';
import Auth from 'services/auth';
import { setAccessToken, removeStorage, getUserData } from 'lib/contexts/auth';
import { UserType } from 'interfaces/auth';
import { SIGN_IN } from 'constants/endpoints';
import { login, loginError, loginSuccess, logout, setUser } from './auth.ducks';

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
      yield put({ type: loginSuccess.type, payload: Auth.getUserFrom(data) });
    }
  } catch (error) {
    yield put({ type: loginError.type });
  }
}

export function* logoutUser() {
  yield call(removeStorage);
}

export const getUser = (state: RootState): UserType => state.auth.user;

export function* reloadUser() {
  const user: UserType = yield select(getUser);

  if (!user.shortName) {
    const sessionUser: UserType = yield call(getUserData);

    yield put({ type: setUser.type, payload: Auth.getUserFrom(sessionUser) });
  }
}

export function* watchSagas() {
  yield takeLatest(login.type, signIn);
  yield takeLatest(logout.type, logoutUser);
  yield takeLatest(loadBooksSuccess.type, reloadUser);
}

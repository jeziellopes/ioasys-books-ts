import { put, select, takeLatest } from 'redux-saga/effects';
import { RootState } from 'store';
import { loginSuccess } from 'store/auth/auth.ducks';
import api from 'services/api';
import { BOOKS } from 'constants/endpoints';
import {
  BooksState,
  loadBooks,
  loadBooksError,
  loadBooksSuccess,
  setBook,
  setPage,
} from './books.ducks';

export const getPage = (state: RootState): BooksState => state.books;

export function* loadBooksSaga() {
  try {
    const { page, amount }: BooksState = yield select(getPage);
    const { data } = yield api.get(BOOKS, { params: { page, amount } });

    yield put({ type: loadBooks.type, payload: data });
    yield put({ type: loadBooksSuccess.type });
  } catch (error) {
    yield put({ type: loadBooksError.type });
  }
}

export function* watchSagas() {
  yield takeLatest(loginSuccess.type, loadBooksSaga);
  yield takeLatest(setPage.type, loadBooksSaga);
  yield takeLatest(loadBooksSuccess.type, setBook);
}

import { createAction, createReducer } from '@reduxjs/toolkit';
import { Books, Book } from 'interfaces/books';

export type BooksState = {
  data: Books;
  book: Book | null;
  page: number;
  amount: number;
  selected: string | null;
  loading: boolean;
  loaded: boolean;
  error: boolean;
};

const INITIAL_STATE: BooksState = {
  data: {} as Books,
  book: null,
  page: 1,
  amount: 12,
  selected: null,
  loading: false,
  loaded: false,
  error: false,
};

export const setPage = createAction<number>('SET_PAGE');
export const setSelected = createAction<string>('SET_SELECTED');
export const setBook = createAction<Book | null>('SET_BOOK');
export const loadBooks = createAction('LOAD_BOOKS');
export const loadBooksError = createAction('LOAD_BOOKS_ERROR');
export const loadBooksSuccess = createAction('LOAD_BOOKS_SUCCESS');
export const init = createAction('INIT_BOOKS');

export default createReducer(INITIAL_STATE, {
  [setPage.type]: (state, action) => ({ ...state, page: action.payload }),
  [setSelected.type]: (state, action) => ({
    ...state,
    selected: action.payload,
  }),
  [setBook.type]: (state, action) => ({ ...state, book: action.payload }),
  [loadBooks.type]: (state) => ({ ...state, loading: true }),
  [loadBooksError.type]: (state) => ({ ...state, loading: false, error: true }),
  [loadBooksSuccess.type]: (state, action) => ({
    ...state,
    data: action.payload,
    loading: false,
    loaded: true,
    error: false,
  }),
  [init.type]: () => INITIAL_STATE,
});

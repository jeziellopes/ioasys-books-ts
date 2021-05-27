import { createAction, createReducer } from '@reduxjs/toolkit';
import { Books, Book } from 'interfaces/books';

export type BooksState = {
  data: Books;
  book: Book | null;
  page: number;
  amount: number;
  selected: number | null;
  loaded: boolean;
  error: boolean;
};

const INITIAL_STATE: BooksState = {
  data: {} as Books,
  book: null,
  page: 1,
  amount: 25,
  selected: null,
  loaded: false,
  error: false,
};

export const setPage = createAction<number>('SET_PAGE');
export const setBook = createAction('SET_BOOK');
export const loadBooks = createAction('LOAD_BOOKS');
export const loadBooksError = createAction('LOAD_BOOKS_ERROR');
export const loadBooksSuccess = createAction('LOAD_BOOKS_SUCCESS');
export const selectBook = createAction('SELECT_BOOK');
export const init = createAction('INIT_BOOKS');

export default createReducer(INITIAL_STATE, {
  [setPage.type]: (state, action) => ({ ...state, page: action.payload }),
  [setBook.type]: (state) => ({
    ...state,
    book: state.selected ? state.data?.data[state.selected] : null,
  }),
  [loadBooks.type]: (state, action) => ({ ...state, books: action.payload }),
  [loadBooksError.type]: (state) => ({ ...state, error: true }),
  [loadBooksSuccess.type]: (state) => ({
    ...state,
    error: false,
    loaded: true,
  }),
  [init.type]: () => INITIAL_STATE,
});

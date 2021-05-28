import React, { useEffect, useState } from 'react';
import { RootState } from 'store';
import { loadBooks, setPage } from 'store/books/books.ducks';
import { useAppDispatch, useAppSelector } from 'hooks';
import BooksContext from 'contexts/books';

export type BooksProviderType = {
  children?: React.ReactChild[];
};

/**
 * Books Context Provider
 */
const BooksProvider = ({ children }: BooksProviderType) => {
  const [amount, setAmount] = useState(20);
  const { data: books, loading, loaded, page } = useAppSelector(
    (state: RootState) => state.books,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!loading && !loaded) dispatch(loadBooks());
  }, [books, loading, loaded, dispatch]);

  // check if pagination can go back
  const canGoBack = () => page > 1;

  // check if pagination can go next
  const canGoNext = () => page < Math.ceil(books.totalPages);

  // increase page based on actual and max pages
  const increasePage = () => {
    if (canGoNext()) dispatch(setPage(page + 1));
  };

  // decrease page based on actual and max pages
  const decreasePage = () => {
    if (canGoBack()) dispatch(setPage(page - 1));
  };

  // return books context
  return (
    <BooksContext.Provider
      value={{
        books,
        canGoBack,
        canGoNext,
        decreasePage,
        increasePage,
        amount,
        setAmount,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;

import React, { useState } from 'react';
import { RootState } from 'store';
import { setPage } from 'store/books/books.ducks';
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
  const books = useAppSelector((state: RootState) => state.books.data);
  const dispatch = useAppDispatch();

  // check if pagination can go back
  const canGoBack = () => books.page > 1;

  // check if pagination can go next
  const canGoNext = () => books.page < Math.ceil(books?.totalPages);

  // increase page based on actual and max pages
  const increasePage = () => {
    if (canGoNext()) dispatch(setPage(books.page + 1));
  };

  // decrease page based on actual and max pages
  const decreasePage = () => {
    if (canGoBack()) dispatch(setPage(books.page - 1));
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

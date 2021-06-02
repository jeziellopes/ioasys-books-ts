import { useContext } from 'react';
import BooksContext from 'contexts/books';
import { Books } from 'interfaces/books';

export type UseBooksType = {
  books: Books;
  canGoBack: () => boolean;
  canGoNext: () => boolean;
  increasePage: () => void;
  decreasePage: () => void;
  amount: number;
  setAmount: (n: number) => void;
};

const useBooks = (): UseBooksType => {
  const context = useContext(BooksContext);

  return context;
};

export default useBooks;

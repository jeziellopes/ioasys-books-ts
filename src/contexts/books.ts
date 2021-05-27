import { createContext } from 'react';
import { UseBooksType } from 'hooks/useBooks';

const BooksContext = createContext({} as UseBooksType);

export default BooksContext;

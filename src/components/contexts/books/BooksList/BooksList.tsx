import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import { useAppSelector } from 'hooks';
import * as C from 'components/contexts';
import * as CS from 'components/structure';
import { Book } from 'interfaces/books';
import * as S from './BooksList.styles';

export type BooksListProps = {
  children?: React.ReactChild;
};

export const BooksList = ({ children }: BooksListProps) => {
  const books = useAppSelector((state: RootState) => state.books.data);
  const { id } = useParams();

  useEffect(() => {
    // if (id) showBook(id), [id];
  });

  return (
    <S.Wrapper>
      {books &&
        books.data?.map((book: Book) => (
          <CS.BookCard key={book.id} book={book} />
        ))}
      {id && <C.BookModal>{id}</C.BookModal>}
    </S.Wrapper>
  );
};

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import { setSelected } from 'store/books/books.ducks';
import { useAppDispatch, useAppSelector } from 'hooks';
import * as C from 'components/contexts';
import * as CS from 'components/structure';
import { Book } from 'interfaces/books';
import * as S from './BooksList.styles';

export type BooksListProps = {
  children?: React.ReactChild;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BooksList = ({ children }: BooksListProps) => {
  const books = useAppSelector((state: RootState) => state.books.data);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(setSelected(id));
    }
  }, [dispatch, id]);

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

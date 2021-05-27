import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import { useAppSelector } from 'hooks';
// import { BookCard, Modal } from 'components/structure';
import { Container } from './BooksList.styles';

export default function BooksList() {
  const { data: books } = useAppSelector((state: RootState) => state.books);
  const { id } = useParams();

  useEffect(() => {
    // if (id) showBook(id), [id];
  });

  return (
    <Container>
      {/* {books &&
        books.data?.length &&
        books.data.map((book) => <BookCard key={book.id} book={book} />)}
      {id && <Modal>{id}</Modal>} */}
    </Container>
  );
}

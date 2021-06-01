import React from 'react';
import { useNavigate } from 'react-router-dom';
import Book from 'services/book';
import * as CS from 'components/structure';
import { Book as BookType } from 'interfaces/books';
import * as S from './BookCard.styles';

export type BookCardProps = {
  children?: React.ReactChild;
  key: string;
  book: BookType;
};

export const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper onClick={() => navigate(`/book/${book.id}`)}>
      <S.CoverContainer>
        <S.BookCover src={book.imageUrl} />
      </S.CoverContainer>
      <S.BookInformations>
        <CS.Column>
          <S.BookTitle useOverflow={Book.hasManyAuthors(book)}>
            {book.title}
          </S.BookTitle>
          {Book.normalizedAuthors(book.authors).map((author) => (
            <S.BookAuthor key={btoa(author)}>{author}</S.BookAuthor>
          ))}
        </CS.Column>
        <CS.Column>
          <S.BookDetails>{book.pageCount} páginas</S.BookDetails>
          <S.BookDetails>Editora {book.publisher}</S.BookDetails>
          <S.BookDetails>Publicado em {book.published}</S.BookDetails>
        </CS.Column>
      </S.BookInformations>
    </S.Wrapper>
  );
};

import { BooksProvider } from 'providers';
import React from 'react';
import * as C from 'components/contexts';
import * as CS from 'components/structure';
import * as S from './Books.styles';

const Books = () => (
  <S.BooksContainer>
    <S.BooksHeader>
      <CS.LogoHeader>
        <CS.Logo />
        <CS.LogoTitle>Books</CS.LogoTitle>
      </CS.LogoHeader>

      <C.UserHeader />
    </S.BooksHeader>
    <BooksProvider>
      <C.BooksList />
      <C.Pagination />
    </BooksProvider>
  </S.BooksContainer>
);

export default Books;

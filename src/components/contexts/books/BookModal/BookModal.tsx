import Book from 'services/book';
import { useAppSelector, useBookModal } from 'hooks';
import * as CS from 'components/structure';
import * as S from './BookModal.styles';

export type BookModalProps = {
  children?: React.ReactChild;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BookModal = ({ children }: BookModalProps) => {
  const { book } = useAppSelector((state) => state.books);
  const { show, handleClose } = useBookModal();

  return (
    <S.Wrapper show={show}>
      <CS.CloseButton onClick={handleClose} />
      {book && (
        <S.ModalContainer>
          <CS.Column>
            <S.BookCover src={book?.imageUrl} />
          </CS.Column>
          <S.DetailsContainer>
            <CS.Column>
              <S.BookTitle>{book?.title}</S.BookTitle>
              <S.BookAuthor>
                {Book.inlineAuthors(book?.authors ?? '')}
              </S.BookAuthor>
            </CS.Column>
            <S.InformationsContainer>
              <S.BookLabels>{'Informações'.toUpperCase()}</S.BookLabels>
              <S.InformationRow>
                <S.BookLabels>Páginas</S.BookLabels>
                <S.BookDetails>{book.pageCount} páginas</S.BookDetails>
              </S.InformationRow>
              <S.InformationRow>
                <S.BookLabels>Editora</S.BookLabels>
                <S.BookDetails>Editora {book.publisher}</S.BookDetails>
              </S.InformationRow>
              <S.InformationRow>
                <S.BookLabels>Publicação</S.BookLabels>
                <S.BookDetails>{book.published}</S.BookDetails>
              </S.InformationRow>
              <S.InformationRow>
                <S.BookLabels>Idioma</S.BookLabels>
                <S.BookDetails>{book.language}</S.BookDetails>
              </S.InformationRow>
              <S.InformationRow>
                <S.BookLabels>Título Original</S.BookLabels>
                <S.BookDetails capitalize>{book.title}</S.BookDetails>
              </S.InformationRow>
              <S.InformationRow>
                <S.BookLabels>ISBN-10</S.BookLabels>
                <S.BookDetails>{book.isbn10}</S.BookDetails>
              </S.InformationRow>
              <S.InformationRow>
                <S.BookLabels>ISBN-13</S.BookLabels>
                <S.BookDetails>{book.isbn13}</S.BookDetails>
              </S.InformationRow>
            </S.InformationsContainer>
            <S.DescriptionContainer>
              <S.BookLabels>{'Resenha da Editora'.toUpperCase()}</S.BookLabels>
              <S.BookDetails>
                <CS.Quotes />
                {book.description}
              </S.BookDetails>
            </S.DescriptionContainer>
          </S.DetailsContainer>
        </S.ModalContainer>
      )}
    </S.Wrapper>
  );
};

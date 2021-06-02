import { useScreenSize } from 'hooks';
import useBooks from 'hooks/useBooks';
import * as CS from 'components/structure';
import * as S from './Pagination.styles';

export type PaginationProps = {
  children?: React.ReactChild;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Pagination = ({ children }: PaginationProps) => {
  const {
    books,
    canGoBack,
    canGoNext,
    increasePage,
    decreasePage,
  } = useBooks();
  const [width] = useScreenSize();

  return books?.page ? (
    <S.Wrapper>
      {width <= 768 && (
        <CS.PrevButton onClick={decreasePage} disabled={!canGoBack()} />
      )}
      <S.PaginationContainer>
        <S.PaginationLabel>Página &nbsp;</S.PaginationLabel>
        <S.PaginationLabel strong>{books?.page ?? ''}&nbsp;</S.PaginationLabel>
        <S.PaginationLabel>de&nbsp;</S.PaginationLabel>
        <S.PaginationLabel strong>
          {Math.ceil(books?.totalPages)}
        </S.PaginationLabel>
      </S.PaginationContainer>
      <S.ActionContainer>
        {width > 768 && (
          <CS.PrevButton disabled={!canGoBack()} onClick={decreasePage} />
        )}
        <CS.NextButton onClick={increasePage} disabled={!canGoNext()} />
      </S.ActionContainer>
    </S.Wrapper>
  ) : (
    <S.Wrapper />
  );
};

import * as S from './FormError.styles';

export type FormErrorProps = {
  children?: React.ReactChild;
};

export const FormError = ({ children }: FormErrorProps) => (
  <S.Wrapper>
    <h1>{children}</h1>
  </S.Wrapper>
);

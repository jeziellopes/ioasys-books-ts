import * as S from './TextInput.styles';

export type TextInputProps = {
  children?: React.ReactChild;
  type: string;
  label: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit?: () => void;
};

export const TextInput = ({
  type,
  label,
  value,
  onChange,
  onSubmit,
}: TextInputProps) => (
  <S.Wrapper>
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.InputValue type={type} onChange={onChange} value={value} />
    </S.InputContainer>

    <S.ActionContainer>
      {onSubmit && <S.Button onClick={onSubmit}>Entrar</S.Button>}
    </S.ActionContainer>
  </S.Wrapper>
);

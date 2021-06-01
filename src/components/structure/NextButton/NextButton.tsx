import * as S from './NextButton.styles';

export type NextButtonProps = {
  children?: React.ReactChild;
  disabled?: boolean;
  onClick?: () => void;
};

export const NextButton = ({ disabled, onClick }: NextButtonProps) => (
  <S.Wrapper onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <circle
        r="15.5"
        stroke="#333"
        strokeOpacity="0.2"
        transform="matrix(-1 0 0 1 16 16)"
      ></circle>
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeOpacity={disabled ? '0.4' : '1'}
        d="M14 12l4 4-4 4"
      ></path>
    </svg>
  </S.Wrapper>
);

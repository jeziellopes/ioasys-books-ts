import * as S from './PrevButton.styles';

export type PrevButtonProps = {
  children?: React.ReactChild;
  disabled?: boolean;
  onClick?: () => void;
};

export const PrevButton = ({ disabled, onClick }: PrevButtonProps) => (
  <S.Wrapper onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <circle
        cx="16"
        cy="16"
        r="15.5"
        stroke="#333"
        strokeOpacity="0.2"
      ></circle>
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeOpacity={disabled ? '0.4' : '1'}
        d="M18 12l-4 4 4 4"
      ></path>
    </svg>
  </S.Wrapper>
);

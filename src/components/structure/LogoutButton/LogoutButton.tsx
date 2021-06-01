import { useNavigate } from 'react-router';
import { logout as logoutAction } from 'store/auth/auth.ducks';
import { useAppDispatch } from 'hooks';
import { ROUTES } from 'constants/urls';
import * as S from './LogoutButton.styles';

export type LogoutButtonProps = {
  children?: React.ReactChild;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutAction());
    navigate(ROUTES.signIn.base);
  };

  return (
    <S.Wrapper onClick={logout}>
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
          d="M19 12l4 4m0 0l-4 4m4-4H12.5M14.5 9H11a2 2 0 00-2 2v10a2 2 0 002 2h3.5"
        ></path>
      </svg>
    </S.Wrapper>
  );
};

import { useEffect } from 'react';
import { useAppSelector } from 'hooks';
import * as CS from 'components/structure';
import * as S from './UserHeader.styles';

export type UserHeaderProps = {
  children?: React.ReactChild;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserHeader = ({ children }: UserHeaderProps) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <S.Wrapper>
      {user?.shortName && (
        <S.WelcomeLabel>
          Bem-vindo,&nbsp;
          <S.UserLabel>{user.shortName}</S.UserLabel>
        </S.WelcomeLabel>
      )}
      <CS.LogoutButton />
    </S.Wrapper>
  );
};

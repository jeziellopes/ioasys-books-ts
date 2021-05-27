import React from 'react';
import { useAppSelector } from 'hooks';
import * as CS from 'components/structure';
import { Container, WelcomeLabel, UserLabel } from './UserHeader.styles';

export default function UserHeader() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Container>
      {user?.shortName && (
        <WelcomeLabel>
          Bem-vindo,&nbsp;
          <UserLabel>{user.shortName}</UserLabel>
        </WelcomeLabel>
      )}
      <CS.LogoutButton />
    </Container>
  );
}

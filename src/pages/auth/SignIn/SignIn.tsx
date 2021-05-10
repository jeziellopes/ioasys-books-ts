import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import { ROUTES } from 'constants/urls';
import { TextInput } from '../../../components/form';
import { Logo, FormError } from '../../../components/structure';
import { LogoHeader, LogoTitle } from '../../../components/structure/common';
import { useForm } from '../../../hooks';
import * as S from './SignIn.style';

const SignIn = () => {
  const [signed, setSigned] = useState(false); //implement auth global state
  const navigate = useNavigate();
  const {
    values: { email, password },
    error,
    errors,
    validated,
    handleChange,
  } = useForm();

  type UserSignIn = {
    email: string;
    password: string;
  };

  const signIn = (user: UserSignIn) => console.log('signin');

  useEffect(() => {
    if (signed) navigate(ROUTES.app.getLink('books'));
  }, [navigate, signed]);

  const handleSignIn = () => {
    if (validated && !signed) signIn({ email, password });
  };

  return (
    <S.Wrapper>
      <Helmet title={'SignIn | Ioasys Books'} />
      <S.Content>
        <LogoHeader>
          <Logo light />
          <LogoTitle light>Books</LogoTitle>
        </LogoHeader>

        <S.SignInInputs>
          <TextInput
            type="email"
            label={'Email'}
            value={email}
            onChange={handleChange}
          />
          <TextInput
            type="password"
            label={'Senha'}
            value={password}
            onChange={handleChange}
            // this input can additionally submit the form
            onSubmit={handleSignIn}
          />
        </S.SignInInputs>

        {error && <FormError />}
      </S.Content>
    </S.Wrapper>
  );
};

export default SignIn;
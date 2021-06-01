import { createAction, createReducer } from '@reduxjs/toolkit';
import { SignInType, UserType } from 'interfaces/auth';

export type AuthState = {
  user: UserType;
  error: boolean;
  signed: boolean;
  resetRequest: boolean;
};

const INITIAL_STATE: AuthState = {
  user: {} as UserType,
  error: false,
  signed: false,
  resetRequest: false,
};

export const login = createAction<SignInType, 'LOGIN'>('LOGIN');
export const setUser = createAction<SignInType, 'SET_USER'>('SET_USER');
export const loginError = createAction('LOGIN_ERROR');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const logout = createAction('LOGOUT');

export default createReducer(INITIAL_STATE, {
  [login.type]: (state, action) => ({ ...state, user: action.payload }),
  [setUser.type]: (state, action) => ({ ...state, user: action.payload }),
  [loginError.type]: (state) => ({ ...state, error: true }),
  [loginSuccess.type]: (state, action) => ({
    ...state,
    error: false,
    signed: true,
    user: action.payload,
  }),
  [logout.type]: () => ({
    user: {} as UserType,
    error: false,
    signed: false,
    resetRequest: false,
  }),
});

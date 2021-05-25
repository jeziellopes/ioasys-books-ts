import { createAction, createReducer } from '@reduxjs/toolkit';
import { SignInType } from 'interfaces/auth';

const INITIAL_STATE = {
  user: {},
  error: false,
  signed: false,
  resetRequest: false,
};

export const login = createAction<SignInType, 'LOGIN'>('LOGIN');
export const loginError = createAction('LOGIN_ERROR');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const logout = createAction('LOGOUT');

export default createReducer(INITIAL_STATE, {
  [login.type]: (state, action) => ({ ...state, user: action.payload }),
  [loginError.type]: (state) => ({ ...state, error: true }),
  [loginSuccess.type]: (state) => ({ ...state, error: false, signed: true }),
  [logout.type]: () => ({
    user: {},
    error: false,
    signed: false,
    resetRequest: false,
  }),
});

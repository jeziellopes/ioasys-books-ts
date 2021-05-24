import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store';
import useForm from './useForm';
import useScreenSize from './useScreenSize';

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useForm, useScreenSize, useAppDispatch, useAppSelector };

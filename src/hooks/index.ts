import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store';
import useBooks from './useBooks';
import useForm from './useForm';
import useBookModal from './useModal';
import useScreenSize from './useScreenSize';

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  useBookModal,
  useBooks,
  useForm,
  useScreenSize,
  useAppDispatch,
  useAppSelector,
};

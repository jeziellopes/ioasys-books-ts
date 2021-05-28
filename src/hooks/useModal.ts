import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/urls';
import { useBooks } from './';

/**
 * Book Modal Hook
 */
export default function useBookModal() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  // ease-out close modal
  const handleClose = () => {
    // wait animation to
    setTimeout(() => {
      // redirect
      navigate(ROUTES.app.getLink('books'));
    }, 150);
    // trigger to animation close
    setShow(false);
  };

  return { show, handleClose };
}

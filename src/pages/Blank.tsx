import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { ROUTES } from 'constants/urls';

/**
 * Blank Page Component
 */
function Blank() {
  const navigate = useNavigate();
  const signed = useAppSelector((state) => state.auth?.signed);

  // at start redirect to initial page
  useEffect(() => {
    if (signed) {
      navigate(ROUTES.app.getLink('books'));
    } else {
      navigate(ROUTES.signIn.base);
    }
  });

  return <></>;
}

export default Blank;

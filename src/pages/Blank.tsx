import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/urls';

/**
 * Blank Page Component
 */
function Blank() {
  const navigate = useNavigate();

  // at start redirect to initial page
  useEffect(() => {
    navigate(ROUTES.signIn.base);
  });

  return <></>;
}

export default Blank;

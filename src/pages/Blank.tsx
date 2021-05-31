import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from 'lib/contexts/auth';
import { ROUTES } from 'constants/urls';

/**
 * Blank Page Component
 */
function Blank() {
  const navigate = useNavigate();

  // at start redirect to initial page
  useEffect(() => {
    if (isAuthenticated()) {
      navigate(ROUTES.app.getLink('books'));
    } else {
      navigate(ROUTES.signIn.base);
    }
  });

  return <></>;
}

export default Blank;

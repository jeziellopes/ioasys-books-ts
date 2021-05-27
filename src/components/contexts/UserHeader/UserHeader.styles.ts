import styled from 'styled-components';
import * as CS from 'components/structure';
import { fadeAnimations } from 'styles/animations';

export const Container = styled(CS.Row)`
  height: 32px;
`;

export const WelcomeLabel = styled.label`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  margin-right: 16px;

  @media (max-width: 700px) {
    display: none;
  }

  ${fadeAnimations}
`;

export const UserLabel = styled.label`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-right: unset;

  @media (max-width: 700px) {
    display: none;
  }
`;

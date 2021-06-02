import styled from 'styled-components';
import { Row } from 'components/structure/common';
import { fadeAnimations } from 'styles/animations';

export const BooksContainer = styled.div`
  padding: 40px;

  padding-left: 115px;
  padding-right: 115px;

  @media (max-width: 512px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (min-width: 513px) and (max-width: 768px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const BooksHeader = styled(Row)`
  height: 40px;
  justify-content: space-between;
`;

export const UserHeader = styled(Row)`
  height: 32px;
`;

export const WelcomeLabel = styled.label`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  margin-right: 16px;

  ${fadeAnimations}
`;

export const UserLabel = styled(WelcomeLabel)`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-right: unset;
`;

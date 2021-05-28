import styled, { DefaultTheme } from 'styled-components';
import { Row } from 'components/structure/common';
import { fadeAnimations } from 'styles/animations';

export const Wrapper = styled(Row)`
  height: 32px;
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  border-radius: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  ${fadeAnimations}
`;

export const PaginationContainer = styled(Row)`
  padding: 0px 16px;
`;

export const ActionContainer = styled(Row)`
  display: flex;
  justify-content: space-between;
  width: 72px;

  @media (max-width: 768px) {
    width: 32px;
  }
`;

export type PaginationLabelType = {
  theme: DefaultTheme;
  strong?: boolean;
};

export const PaginationLabel = styled.label<PaginationLabelType>`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ strong, theme }) =>
    strong
      ? theme.typography.fontWeight.medium
      : theme.typography.fontWeight.regular};
`;

export const MediumLabel = styled(PaginationLabel)`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

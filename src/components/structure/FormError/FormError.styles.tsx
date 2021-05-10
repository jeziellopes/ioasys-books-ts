import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 20px;
    left: 20px;
    color: ${theme.colors.neutral.white};
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: ${theme.typography.sizes.xs};
  `}
`;

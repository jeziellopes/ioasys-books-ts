import styled, { css } from 'styled-components';
import { Row, Column } from 'components/structure/common';
import { fadeAnimations } from 'styles/animations';

export const Wrapper = styled(Row)`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.input.blackOpacity};
    border-radius: 4px;
    width: 368px;
    height: 60px;
    margin-top: 16px;
    justify-content: space-between;

    ${fadeAnimations}

    @media (max-width: 600px) {
      width: 100%;
    }
  `}
`;

export const InputContainer = styled(Column)`
  margin-right: 16px;
  width: 100%;
`;

export const ActionContainer = styled(Column)`
  justify-content: center;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.grayscale.grayOpacity};
    font-weight: ${theme.typography.fontWeight.regular};
    font-size: ${theme.typography.sizes.xs};
    margin-top: 8px;
    margin-left: 16px;
  `}
`;

export const InputValue = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.white};
    font-weight: ${theme.typography.fontWeight.regular};
    font-size: ${theme.typography.sizes.base};
    margin-top: 4px;
    margin-left: 16px;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.secondary.main};
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.sizes.base};
    height: 36px;
    width: 85px;
    border-radius: 44px;
    border: none;
    outline: none;
    margin-right: 12px;
    cursor: pointer;
  `}
`;

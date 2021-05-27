import styled, { css, DefaultTheme } from 'styled-components';
import { Row, Column } from 'components/structure/common';
import { fadeAnimations } from 'styles/animations';

export const Wrapper = styled(Row)`
  background: #fff;
  height: 160px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.bookCardShadows};
  cursor: pointer;

  ${fadeAnimations}
`;

export const CoverContainer = styled(Column)`
  justify-content: center;
  padding: 0px 16px;
`;

export const BookCover = styled.img`
  height: 122px;
  width: 81px;
  border-radius: 0px;
  box-shadow: ${({ theme }) => theme.shadows.bookCoverShadows};
  align-self: center;
`;

export const BookInformations = styled(Column)`
  padding: 16px 16px 16px 0;
  width: calc(100% - 81px - 32px);
  box-sizing: border-box;
  justify-content: space-between;
`;

export type BookTitleType = {
  theme: DefaultTheme;
  useOverflow: boolean;
};

export const BookTitle = styled.span<BookTitleType>`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: capitalize;

  //prevents layout breakdown in some cases
  ${({ useOverflow }) =>
    useOverflow &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export const BookAuthor = styled.span`
  line-height: 20px;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0em;
  text-align: left;
`;

export const BookDetails = styled.span`
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral.darkgray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

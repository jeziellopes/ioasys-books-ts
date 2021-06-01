import styled, { css, DefaultTheme } from 'styled-components';
import { Row, Column } from 'components/structure';

type WrapperType = {
  show: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  background: ${({ theme }) => theme.colors.neutral.modal};
  position: fixed;
  z-index: 1040;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 0;
  animation: fade 0.15s ease-in-out;
  transition: opacity 0.15s;
  display: flex;
  justify-content: center;

  ${({ show }) =>
    show
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

export const ModalContainer = styled.div`
  max-height: 608px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows.bookModalShadows};
  align-self: center;
  padding-right: 0px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-self: flex-end;
    margin-bottom: 16px;
    width: calc(100vw - 32px);
    height: calc(100vh - 80px);
    max-height: unset;
    overflow-y: scroll;
  }
`;

export const BookCover = styled.img`
  height: 512px;
  width: 349px;
  margin: 48px;
  box-shadow: ${({ theme }) => theme.shadows.bookCoverModalShadows};

  @media (max-width: 768px) {
    width: calc(100vw - 80px);
    height: auto;
    margin: 24px;
  }
`;

export const DetailsContainer = styled(Column)`
  width: 276px;
  padding-top: 48px;
  padding-right: 48px;
  padding-bottom: 48px;

  @media (min-width: 769px) {
    overflow-x: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 10px;
    }
    ::-webkit-scrollbar {
      width: 6px;
      border-radius: 10px;
      background-color: #fff;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  @media (max-width: 768px) {
    width: unset;
    padding: 0px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const InformationsContainer = styled(Column)`
  padding-top: 32px;
`;

export const InformationRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  height: 20px;
`;

export const DescriptionContainer = styled(Column)`
  padding-top: 32px;

  @media (max-width: 768px) {
    padding-bottom: 32px;
  }
`;

export const BookTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 40px;
  text-align: left;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BookAuthor = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary.main};
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BookLabels = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 20px;
  text-align: left;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.neutral.darkslategray};
`;

type BooksDetails = {
  theme: DefaultTheme;
  capitalize?: boolean;
};

export const BookDetails = styled.span<BooksDetails>`
  color: ${({ theme }) => theme.colors.neutral.darkgray};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: 20px;
  text-align: justify;
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'unset')};
`;

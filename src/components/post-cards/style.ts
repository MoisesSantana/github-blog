import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

interface CardContainerProps {
  bgImage: string | null;
}

interface PostCardsContainerProps {
  justOneCard: boolean;
}

export const PostCardsContainer = styled.section<PostCardsContainerProps>`
  display: grid;
  grid-template-columns: ${({ justOneCard }) => justOneCard ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'};
  gap: 2rem;
  margin: 3rem 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme['base-text']};
`;

export const CardContainer = styled(StyledLink)<CardContainerProps>`
  overflow: hidden;
  height: 16.5rem;
  padding: 2rem;
  background-color: #112131;
  border-radius: 10px;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  position: relative;
  text-shadow: 0 0 0.8rem #000;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  & > .blur {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
  }

  & > .title {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 4rem;
    overflow: hidden;
    z-index: 1;

    & > span {
      font-size: 1.2rem;
      font-weight: 700;
      color: #fff;
      width: 66%;
      height: 3.2rem;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    & small {
      color: ${({ theme }) => theme['base-text']};
    }
  }

  & > article {
    overflow: hidden;
    position: relative;
    z-index: 1;

    & > * {
      display: none;
    }

    & > p:first-child {
      display: inline;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;

      & a {
        color: #3294F8;
        text-decoration: none;
        font-weight: 700;
      }
    }
  }
`;
import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme['base-profile']};
  width: 100vw;
  padding: 2rem 0;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 80vw;
  }

  img {
    height: 150px;
  }

  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};
    font-family: 'Coda', cursive;
  }
`;
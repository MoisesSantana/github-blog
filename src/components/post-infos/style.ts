import { styled } from 'styled-components';

export const MyInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  width: 100%;
  justify-content: space-between;

  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;

    & a {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-family: 'Coda', cursive;
      color: #3294F8;
      text-transform: uppercase;
      gap: 8px;
      font-size: 12px;
    }
  }

  & h1 {
    color: #E7EDF4;
    margin-bottom: 0.5rem;
  }
`;

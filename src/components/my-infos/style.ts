import { styled } from 'styled-components';

export const MyInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

export const MyInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  & h1 {
    color: #E7EDF4;
  }

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
`;

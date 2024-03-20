import { styled } from 'styled-components';

export const MyInfosContainer = styled.section`
  transform: translateY(-50%);
  background-color: #0B1B2B;
  display: flex;
  padding: 2rem;
  gap: 2rem;
  border: 1px solid #3294F8;
  border-radius: 0.65rem;
  box-shadow: 0 0 1rem 0.25rem #3294F8;

  & img {
    width: 10rem;
    height: 10rem;
    border-radius: 8px;
    border: 2px solid #3294F8;
  }
`;

export const MyInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
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

export const MyInfoFooter = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
    gap: 8px;

    & em {
      font-style: normal;
    }
  }
`;
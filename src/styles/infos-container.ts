import styled from 'styled-components';

export const InfosContainer = styled.section`
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

export const InfoFooter = styled.div`
  display: flex;
  gap: 2rem;

  & div {
    display: flex;
    align-items: center;
    gap: 8px;

    & em {
      font-style: normal;
    }
  }
`;
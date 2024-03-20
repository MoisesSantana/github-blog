import { styled } from 'styled-components';

export const SearchBarContainer = styled.section`

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    & span:first-child {
      color: #E7EDF4;
      font-size: 1.2rem;
    }

    & span:last-child {
      font-size: 1rem;
    }
  }

  & form {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & input {
      width: 100%;
      padding: 0.75rem 1rem;
      border-radius: 6px;
      border: 1px solid #1C2F41;
      background-color: #040F1A;
      color: #E7EDF4;
      font-size: 1rem;

      &::placeholder {
        opacity: 0.6;
      }
    }

    & button {
      padding: 0.75rem 1rem;
      border-radius: 6px;
      border: 1px solid #1C2F41;
      background-color: #040F1A;
      color: #E7EDF4;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #1C2F41;
      }
    }
  }
`;
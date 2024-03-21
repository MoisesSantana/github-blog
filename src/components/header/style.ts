import { styled } from 'styled-components';

interface HeaderProps {
  responsive: string;
}

export const HeaderContainer = styled.header<HeaderProps>`
  background-color: ${({ theme }) => theme['base-profile']};
  width: 100%;
  padding: ${({ responsive }) => responsive !== 'desktop' ? '2rem 0 10rem' : '2rem 0'};
  display: flex;
  justify-content: ${({ responsive }) => responsive !== 'desktop' ? 'center' : 'flex-start'};

  img {
    height: 150px;
  }
`;
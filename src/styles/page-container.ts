import { styled } from 'styled-components';

interface PageContainerProps {
  responsive: string;
}

export const PageContainer = styled.main<PageContainerProps>`
  width: ${({ responsive }) => responsive !== 'desktop' ? '90%' : '60%'};
`;
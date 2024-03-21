import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { LayoutContainer } from './style';
import { IssuesProvider } from '../context/issues-context';
import { PageContainer } from '../styles/page-container';
import { useResponsive } from '../hooks/useResponsive';

export function DefaultLayout() {
  const { responsive } = useResponsive();

  return (
    <IssuesProvider>
      <LayoutContainer>
        <Header />
        <PageContainer responsive={responsive}>
          <Outlet />
        </PageContainer>
      </LayoutContainer>
    </IssuesProvider>
  );
}

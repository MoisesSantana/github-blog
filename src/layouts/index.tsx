import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { LayoutContainer } from './style';
import { IssuesProvider } from '../context/issues-context';

export function DefaultLayout() {
  return (
    <IssuesProvider>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </IssuesProvider>
  );
}

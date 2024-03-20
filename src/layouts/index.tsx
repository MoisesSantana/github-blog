import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { LayoutContainer } from './style';
import { MyInfos } from '../components/my-infos';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <MyInfos />
      <Outlet />
    </LayoutContainer>
  );
}

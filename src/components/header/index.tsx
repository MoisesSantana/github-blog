import { useResponsive } from '../../hooks/useResponsive';
import { HeaderContainer } from './style';

export function Header() {
  const { responsive } = useResponsive();
  console.log(responsive);
  return (
    <HeaderContainer responsive={ responsive }>
      <img src="/logo.svg" alt="octocat do github personalizado" />
    </HeaderContainer>
  );
}
import { HeaderContainer } from './style';

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src="/logo.svg" alt="octocat do github personalizado" />
        <h1>GitHub Blog</h1>
      </div>
    </HeaderContainer>
  );
}
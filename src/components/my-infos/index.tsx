import { Buildings, GithubLogo, Share, Users } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyInfoContent, MyInfoFooter, MyInfoTitle, MyInfosContainer } from './style';

type User = {
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export function MyInfos() {
  const [user, setUser] = useState({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.github.com/users/moisessantana');
      const data = await response.json();
      setUser(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Calma ai...</p>;

  return (
    <MyInfosContainer>
      <img src={ user.avatar_url } alt="moises santana" />
      <MyInfoContent>
        <div>
          <MyInfoTitle>
            <h1>{user.name}</h1>
            <Link target='_blank' to={user.html_url}>
              <span>Github</span>
              <Share size={16} weight="bold" />
            </Link>
          </MyInfoTitle>
          <p>{user.bio}</p>
        </div>
        <MyInfoFooter>
          <div>
            <GithubLogo size={18} weight="fill" />
            <em>{user.login}</em>
          </div>
          <div>
            <Buildings size={18} weight="fill" />
            <em>{user.company}</em>
          </div>
          <div>
            <Users size={18} weight="fill" />
            <em>
              {user.followers}
              {' '}
              seguidores
            </em>
          </div>
        </MyInfoFooter>
      </MyInfoContent>
    </MyInfosContainer>
  );
}
import { Buildings, GithubLogo, Share, Users } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { MyInfoContent, MyInfoTitle } from './style';
import { InfoFooter, InfosContainer } from '../../styles/infos-container';
import { useFetch } from '../../hooks/useGHFetch';

export function MyInfos() {
  const { data, isLoading } = useFetch('users/moisessantana');

  if (isLoading) return <p>Calma ai...</p>;
  console.log(data);

  return (
    <InfosContainer>
      <img src={ data.avatar_url } alt="moises santana" />
      <MyInfoContent>
        <div>
          <MyInfoTitle>
            <h1>{data.name}</h1>
            <Link target='_blank' to={data.html_url}>
              <span>Github</span>
              <Share size={16} weight="bold" />
            </Link>
          </MyInfoTitle>
          <p>{data.bio}</p>
        </div>
        <InfoFooter>
          <div>
            <GithubLogo size={18} weight="fill" />
            <em>{data.login}</em>
          </div>
          <div>
            <Buildings size={18} weight="fill" />
            <em>{data.company}</em>
          </div>
          <div>
            <Users size={18} weight="fill" />
            <em>
              {data.followers}
              {' '}
              seguidores
            </em>
          </div>
        </InfoFooter>
      </MyInfoContent>
    </InfosContainer>
  );
}
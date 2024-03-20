import { Calendar, CaretLeft, GithubLogo, Share, Users } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { InfoFooter, InfosContainer } from '../../styles/infos-container';
import { MyInfoContent } from './style';
import { IssuesContext } from '../../context/issues-context';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function PostInfos() {
  const [loading, setLoading] = useState(true);
  const { issues, updateIssues } = useContext(IssuesContext);
  const params = useParams();
  const { slug } = params;

  async function searchIssues() {
    const response = await fetch(`https://api.github.com/search/issues?q=${slug}%20repo:moisessantana/github-blog`);
    const data = await response.json();
    updateIssues(data);
    setLoading(false);
  }

  useEffect(() => {
    searchIssues();
  }, []);

  if (loading || issues.total_count !== 1) return <p>Calma ai...</p>;
  const [issue] = issues.items;

  const formatedDate = format(
    issue.created_at,
    'dd-MM-yyyy \'às\' HH:mm\'h\'',
    { locale: ptBR }
  );

  const distanceToNow = formatDistanceToNow(issue.created_at, { locale: ptBR, addSuffix: false });

  return (
    <InfosContainer>
      <MyInfoContent>
        <header>
          <Link to="/">
            <CaretLeft size={16} />
            <span>voltar</span>
          </Link>
          <div>
            <Link target='_blank' to={issue.html_url}>
              <span>Ver no GitHub</span>
              <Share size={16} weight="bold" />
            </Link>
          </div>
        </header>
        <h1>{issue.title}</h1>
        <InfoFooter>
          <div>
            <GithubLogo size={18} weight="fill" />
            <em>{issue.user.login}</em>
          </div>
          <div>
            <Calendar size={18} weight="fill" />
            <time
              title={formatedDate}
              dateTime={issue.created_at}
            >
              <em>{distanceToNow}</em>
            </time>
          </div>
          <div>
            <Users size={18} weight="fill" />
            <em>
              {issue.comments}
              {' '}
              comentários
            </em>
          </div>
        </InfoFooter>
      </MyInfoContent>
    </InfosContainer>
  );
}
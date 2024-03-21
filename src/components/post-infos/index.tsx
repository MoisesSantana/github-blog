import { Calendar, CaretLeft, GithubLogo, Share, Users } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';
import { InfoFooter, InfosContainer } from '../../styles/infos-container';
import { PostInfoContent } from './style';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useFetch } from '../../hooks/useGHFetch';
import { useContext } from 'react';
import { IssuesContext } from '../../context/issues-context';
import { useResponsive } from '../../hooks/useResponsive';

export function PostInfos() {
  const { updateIssues } = useContext(IssuesContext);
  const params = useParams();
  const { slug } = params;
  const { responsive } = useResponsive();

  const { data, isLoading } = useFetch(`search/issues?q=${slug}%20repo:moisessantana/github-blog`);

  if (isLoading || data.total_count !== 1) return <p>Calma ai...</p>;
  const [issue] = data.items;
  updateIssues(data);

  const formatedDate = format(
    issue.created_at,
    'dd-MM-yyyy \'às\' HH:mm\'h\'',
    { locale: ptBR }
  );

  const distanceToNow = formatDistanceToNow(issue.created_at, { locale: ptBR, addSuffix: false });

  return (
    <InfosContainer>
      <PostInfoContent>
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
        <InfoFooter responsive={responsive}>
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
      </PostInfoContent>
    </InfosContainer>
  );
}
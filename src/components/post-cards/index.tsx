import { useContext } from 'react';
import { IssuesContext } from '../../context/issues-context';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CardContainer, PostCardsContainer } from './style';
import ReactMarkdown from 'react-markdown';
import { useResponsive } from '../../hooks/useResponsive';

export function PostCards() {
  const { issues } = useContext(IssuesContext);
  const { responsive } = useResponsive();
  const justOneCard = responsive === 'mobile' || responsive === 'tablet';

  const { items } = issues;

  if (!items) return <p>Calma ai...</p>;

  return (
    <PostCardsContainer justOneCard={justOneCard}>
      {items.map((item) => {
        const formatedDate = format(
          item.created_at,
          'dd-MM-yyyy \'às\' HH:mm\'h\'',
          { locale: ptBR }
        );

        const distanceToNow = formatDistanceToNow(item.created_at, { locale: ptBR, addSuffix: false });

        const regex = /!\[.*?\]\((.*?)\)/;
        const match = regex.exec(item.body);
        const bgUrl = match && match[1];

        const textWithoutImage = item.body.replace(regex, '');

        return (
          <CardContainer
            to={`post/${item.title}`}
            bgImage={ bgUrl }
            title={item.title}
            key={item.id}
          >
            <div className="blur" />
            <div className='title'>
              <span>{item.title}</span>
              <time
                title={formatedDate}
                dateTime={item.created_at}
              >
                <small>{distanceToNow}</small>
              </time>
            </div>
            <article>
              <ReactMarkdown>
                {textWithoutImage}
              </ReactMarkdown>
            </article>
          </CardContainer>
        );
      })}
    </PostCardsContainer>
  );
}
import { useContext } from 'react';
import { IssuesContext } from '../../context/issues-context';
import ReactMarkdown from 'react-markdown';
import { PostContentContainer } from './style';

export function PostContent() {
  const { issues } = useContext(IssuesContext);

  if (issues.total_count !== 1) return <p>Calma ai...</p>;

  const [issue] = issues.items;

  return (
    <PostContentContainer>
      <ReactMarkdown>
        {issue.body}
      </ReactMarkdown>
    </PostContentContainer>
  );
}
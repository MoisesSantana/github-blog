import { PostContent } from '../../components/post-content';
import { PostInfos } from '../../components/post-infos';
import { PageContainer } from '../../styles/page-container';

export function Posts() {
  return (
    <PageContainer>
      <PostInfos />
      <PostContent />
    </PageContainer>
  );
}
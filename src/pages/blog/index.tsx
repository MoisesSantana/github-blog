import { MyInfos } from '../../components/my-infos';
import { PostCards } from '../../components/post-cards';
import { SearchBar } from '../../components/search-bar';
import { PageContainer } from '../../styles/page-container';

export function Blog() {
  return (
    <PageContainer>
      <MyInfos />
      <SearchBar />
      <PostCards />
    </PageContainer>
  );
}
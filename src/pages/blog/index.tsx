import { MyInfos } from '../../components/my-infos';
import { PostCards } from '../../components/post-cards';
import { SearchBar } from '../../components/search-bar';
import { BlogContainer } from './style';

export function Blog() {
  return (
    <BlogContainer>
      <MyInfos />
      <SearchBar />
      <PostCards />
    </BlogContainer>
  );
}
import { MyInfos } from '../../components/my-infos';
import { PostCards } from '../../components/post-cards';
import { SearchBar } from '../../components/search-bar';

export function Blog() {
  return (
    <>
      <MyInfos />
      <SearchBar />
      <PostCards />
    </>
  );
}
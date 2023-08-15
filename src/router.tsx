import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { Blog } from './pages/blog';
import { Posts } from './pages/posts';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Blog />} />
        <Route path='posts/:id' element={<Posts />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}
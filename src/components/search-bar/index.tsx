import { useEffect, useState } from 'react';
import { SearchBarContainer } from './style';

type Issues = {
  total_count: number;
}

export function SearchBar() {
  const [issues, setIssues] = useState({} as Issues);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    searchIssues();
  }, []);

  async function searchIssues() {
    const response = await fetch(`https://api.github.com/search/issues?q=${search}%20repo:moisessantana/github-blog`);
    const data = await response.json();
    console.log(data);
    setIssues(data);
    setLoading(false);
  }

  if (loading) return <p>Calma ai...</p>;

  return (
    <SearchBarContainer>
      <div>
        <span>Publicações</span>
        <span>
          {issues.total_count}
          {' '}
          publicações
        </span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchIssues();
        }}
      >
        <input
          type="text"
          placeholder="Buscar conteúdo..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Buscar</button>
      </form>
    </SearchBarContainer>
  );
}
import { useContext, useState } from 'react';
import { SearchBarContainer } from './style';
import { useFetch } from '../../hooks/useGHFetch';
import { IssuesContext } from '../../context/issues-context';

export function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const { updateIssues } = useContext(IssuesContext);

  const { data, isLoading } = useFetch(`search/issues?q=${search}%20repo:moisessantana/github-blog`);

  if (isLoading) return <p>Calma ai...</p>;

  updateIssues(data);

  return (
    <SearchBarContainer>
      <div>
        <span>Publicações</span>
        <span>
          {data.total_count}
          {' '}
          publicações
        </span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(inputValue);
          setInputValue('');
        }}
      >
        <input
          type="text"
          placeholder="Buscar conteúdo..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Buscar</button>
      </form>
    </SearchBarContainer>
  );
}
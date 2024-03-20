import useSWR from 'swr';
import api from '../services/api';

export function useFetch(url: string) {
  const { data, isLoading } = useSWR(url, async (url) => {
    const { data } = await api.get(url);
    return data;
  });

  return { data, isLoading };
}
import { query } from './query';
import { useQuery } from 'urql';

const LIMIT = 20;

export const useQueryStart = () => {
  const [result] = useQuery({
    query,
    variables: { offset: 0 },
  });

  return [result];
};

export const useQueryHook = (offset: number) => {
  const [result] = useQuery({
    query,
    variables: { offset: offset * LIMIT },
  });

  return [result];
};

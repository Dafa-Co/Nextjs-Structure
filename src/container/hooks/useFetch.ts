import {useQuery, QueryKey} from "@tanstack/react-query";

type Options<T> = {
  queryKey: QueryKey;
  queryFn: () => Promise<TypeResponse<T>>;
};

export default function useFetch<T>({queryFn, queryKey}: Options<T>) {
  return useQuery<TypeResponse<T>, TypeResponseError>({
    queryKey: queryKey,
    queryFn,
  });
}

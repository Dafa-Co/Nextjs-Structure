import {MutationKey, QueryKey, useMutation, useQueryClient} from "@tanstack/react-query";

type Options<T, V> = {
  mutationKey: MutationKey;
  mutationFn: (variables: V) => Promise<TypeResponse<T>>;
  queryKey?: QueryKey;
};

export default function useMutate<T, V>({mutationFn, mutationKey, queryKey}: Options<T, V>) {
  // Access the client
  const queryClient = useQueryClient();

  // mutation function
  const mutation = useMutation<TypeResponse<T>, TypeResponseError, V>({
    mutationKey,
    mutationFn,
    onSuccess() {
      if (queryKey) {
        queryClient.invalidateQueries({
          queryKey: queryKey,
        });
      }
    },
  });

  return {...mutation, queryClient};
}

"use client";

import {ReactNode, useState} from "react";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {ReactQueryStreamedHydration} from "@tanstack/react-query-next-experimental";

export default function ReactQueryProvider({children}: {children: ReactNode}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}

"use client";

import ErrorComponent from "@/container/components/error";

type Props = {
  error: TypeResponseError;
  reset: () => void;
};

export default function Error({error, reset}: Props) {
  return (
    <section>
      <ErrorComponent message={error.message} reset={reset} />
    </section>
  );
}

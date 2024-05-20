"use client";

import {metaParams} from "@/container/constants";

import useUrlSearchParams from "@/container/hooks/useUrlSearchParams";

import ClearIcon from "./icons/clearIcon";

type Props = {};

export default function ClearFilter({}: Props) {
  const {searchParams, removeSearchParmas} = useUrlSearchParams();

  const isSearch = searchParams.has(metaParams.search);

  const isTake = searchParams.has(metaParams.take);

  const isPage = searchParams.has(metaParams.page);

  return isSearch || isTake || isPage ? (
    <button
      type='button'
      className='link-primary flex items-center gap-0.5rem'
      onClick={() => {
        removeSearchParmas({
          searchParams: [metaParams.search, metaParams.take, metaParams.page],
        });
      }}
    >
      <ClearIcon />
      Clear
    </button>
  ) : null;
}

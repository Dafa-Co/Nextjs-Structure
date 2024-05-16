"use client";

import {EnumMetaParams} from "@/container/constants";

import useUrlSearchParams from "@/container/hooks/useUrlSearchParams";

import ClearIcon from "./icons/clearIcon";

type Props = {};

export default function ClearFilter({}: Props) {
  const {searchParams, removeSearchParmas} = useUrlSearchParams();

  const isSearch = searchParams.has(EnumMetaParams.search);

  const isTake = searchParams.has(EnumMetaParams.take);

  const isPage = searchParams.has(EnumMetaParams.page);

  return isSearch || isTake || isPage ? (
    <button
      type='button'
      className='link-primary flex items-center gap-0.5rem'
      onClick={() => {
        removeSearchParmas({
          searchParams: [EnumMetaParams.search, EnumMetaParams.take, EnumMetaParams.page],
        });
      }}
    >
      <ClearIcon />
      Clear
    </button>
  ) : null;
}

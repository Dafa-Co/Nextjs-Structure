"use client";

import {FormEvent, useEffect, useState} from "react";

import Input from "./form/input";

import Label from "./form/label";

import SearchIcon from "./icons/searchIcon";

import useUrlSearchParams from "@/container/hooks/useUrlSearchParams";

import {debounceTimeOut, EnumMetaParams} from "@/container/constants";

type Props = {};

export default function PageSearch({}: Props) {
  const {searchParams, setSearchParmas} = useUrlSearchParams();

  const searchParamValue = searchParams.get(EnumMetaParams.search) || "";

  const [searchValue, setSearchValue] = useState(searchParamValue);

  let debounceTimer: NodeJS.Timeout;

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    clearTimeout(debounceTimer);

    setSearchValue(val);

    debounceTimer = setTimeout(() => {
      setSearchParmas({
        searchParams: [{key: EnumMetaParams.search, value: val}],
      });
    }, debounceTimeOut);
  };

  useEffect(() => {
    if (!searchParamValue) {
      setSearchValue("");
    }
  }, [searchParamValue]);

  return (
    <div className='relative max-w-96'>
      <Label htmlFor='page-search' className='absolute top-1/2 -translate-y-1/2 left-1rem'>
        <SearchIcon
          svgProps={{
            className: "w-1rem",
          }}
        />
      </Label>
      <Input
        type='search'
        name='page-search'
        id='page-search'
        placeholder='Search for something'
        className='ps-2.75rem'
        onInput={handleInput}
        value={searchValue}
      />
    </div>
  );
}

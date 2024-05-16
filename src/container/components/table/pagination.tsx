"use client";

import ClassNameHelper from "@/container/helpers/classNameHelper";

import useUrlSearchParams from "@/container/hooks/useUrlSearchParams";

import {usePathname, useRouter} from "next/navigation";
import {ReactNode} from "react";
import ChevronLeftIcon from "../icons/chevronLeftIcon";
import ChevronRightIcon from "../icons/chevronRightIcon";

type Props = TypePaggination;

export default function Pagination({pageCount: pages}: Props) {
  // get router
  const router = useRouter();

  // get path name
  const pathname = usePathname();

  // get search parameters
  const {searchParams, setSearchParmas} = useUrlSearchParams();

  const currentPage = searchParams.get("page") || 1;

  const prevPage = Number(currentPage) > 1 ? Number(currentPage) - 1 : 0;

  const nextPage = Number(currentPage) < pages ? Number(currentPage) + 1 : 0;

  // fill the array with number of pages
  const arrayOfPages: number[] = Array.from({length: pages}, (_, index) => index + 1);

  function handlePage(page: number) {
    if (Number(currentPage) !== page) {
      setSearchParmas({searchParams: {key: "page", value: page.toString()}});
    }
  }

  return arrayOfPages.length ? (
    <div className='mt-2rem flex justify-end'>
      <div className='flex items-center gap-1rem'>
        <Arrows disabled={prevPage < 1} onClick={() => handlePage(prevPage)}>
          <ChevronLeftIcon />
        </Arrows>
        <div>
          {arrayOfPages.map((page: number) => (
            <button
              key={page}
              onClick={() => handlePage(page)}
              className={ClassNameHelper.clsn(
                "join-item btn bg-base-100 border-0 rounded-none first:rounded-ss-btn first:rounded-es-btn last:rounded-se-btn last:rounded-ee-btn w-3rem h-3rem min-w-0 min-h-0",
                {
                  "bg-primary text-white": page === Number(currentPage),
                }
              )}
            >
              {page}
            </button>
          ))}
        </div>

        <Arrows disabled={nextPage < 1} onClick={() => handlePage(nextPage)}>
          <ChevronRightIcon />
        </Arrows>
      </div>
    </div>
  ) : null;
}

type ArrowProps = {
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
};

function Arrows({children, disabled, onClick}: ArrowProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='join-item btn bg-base-100 border-0 rounded-full w-3rem h-3rem min-w-0 min-h-0'
    >
      {children}
    </button>
  );
}

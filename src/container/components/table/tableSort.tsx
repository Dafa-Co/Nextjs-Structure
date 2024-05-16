// "use client";

// import { memo } from "react";

// import { IconArrowDown, IconArrowUp } from "@/app/icons";

// import useUrlSearchParams from "@/hooks/useUrlSearchParams";

// type Props = {
//   sortKey?: string;
// };

// function TableSort({ sortKey }: Props) {
//   const { searchParams, setSearchParmas } = useUrlSearchParams();

//   const sortValue = searchParams.get("sort") || "";

//   function setSort() {
//     const value =
//       sortValue === `${sortKey}:desc` ? `${sortKey}:desc` : `${sortKey}:asc`;

//     if (value) {
//       setSearchParmas({ searchParams: { key: "orderBy", value: value } });
//     }
//   }

//   function activeSort(val: string) {
//     if (val === sortValue) {
//       return "fill-accent";
//     }
//     return "fill-secondary";
//   }

//   return (
//     <button
//       onClick={setSort}
//       type="button"
//       className="flex flex-col gap-[.1rem]"
//     >
//       <IconArrowUp fill={activeSort(`-${sortKey}`)} />
//       <IconArrowDown fill={activeSort(`${sortKey}`)} />
//     </button>
//   );
// }

// export default memo(TableSort);

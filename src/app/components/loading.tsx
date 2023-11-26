import { cls } from "@/helpers";

type Props = {
  className?: string;
};

export default function Loading({ className }: Props) {
  return (
    <div className="page-loading h-[300px] flex items-center justify-center">
      <span className={cls("loader", className)}></span>
    </div>
  );
}

import {ReactNode} from "react";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
};

export default function PageTitle({title, subtitle}: Props) {
  return (
    <div className='border-s-4 border-s-primary ps-1rem'>
      <h1 className='text-24 mb-0.25rem'>{title}</h1>
      {subtitle && <h3 className='text-gray-500 max-w-lg'>{subtitle}</h3>}
    </div>
  );
}

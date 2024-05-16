type Props = {message: string | undefined};

export default function ErrorMessage({message}: Props) {
  return <p className='text-error text-sm mt-0.25rem'>{message}</p>;
}

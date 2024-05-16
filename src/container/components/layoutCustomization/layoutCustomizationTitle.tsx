type Props = {title: string; description: string};

export default function LayoutCustomizationTitle({description, title}: Props) {
  return (
    <div className='mb-1rem'>
      <h6 className='mb-0.25rem'>{title}</h6>
      <p className='text-14 text-gray-500'>{description}</p>
    </div>
  );
}

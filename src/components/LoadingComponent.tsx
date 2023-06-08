import { Spinner } from '@material-tailwind/react';

export default function LoadingComponent() {
  return (
    <div className='grid h-full place-items-center'>
      <Spinner className='h-20 w-20' />
    </div>
  );
}

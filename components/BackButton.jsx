import { useRouter } from 'next/router';

import { ChevronLeftIcon } from '@heroicons/react/20/solid';

export const BackButton = ({ styleClasses }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  const btnClasses = `btn-back ${styleClasses}`;

  return (
    <div className={btnClasses}>
      <button
        type='button'
        onClick={handleClick}
        className='inline-flex items-center gap-x-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20'
      >
        <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
        <span>Back</span>
      </button>
    </div>
  );
};

import Link from 'next/link';

import { FileIcon } from './icons/FileIcon';

export const ResumeNavCard = () => {
  return (
    <Link href='/resume'>
      <a className='w-60 p-6 mt-6 border rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600'>
        <div className='flex items-center justify-center'>
          <FileIcon classes={'h-6 mr-3'} />
          <h3 className='text-2xl font-bold text-center'>Resume</h3>
        </div>
        <p className='mt-4 text-xl text-center'>View my resume</p>
      </a>
    </Link>
  );
};

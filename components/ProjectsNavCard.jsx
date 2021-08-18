import Link from 'next/link';

import { DiagramProjectIcon } from './icons/DiagramProjectIcon';

export const ProjectsNavCard = () => {
  return (
    <Link href='/projects'>
      <a className='p-6 border rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'>
        <div className='flex items-center justify-center'>
          <DiagramProjectIcon classes={'h-6 mr-3'} />
          <h3 className='text-2xl font-bold text-center'>Projects</h3>
        </div>
        <p className='mt-4 text-xl text-center'>See my recent projects</p>
      </a>
    </Link>
  );
};

import Link from 'next/link';
import { motion } from 'framer-motion';

import { navCard } from 'animations';

import { DiagramProjectIcon } from '@/icons/DiagramProjectIcon';

export const ProjectsNavCard = () => {
  return (
    <Link href='/projects'>
      <motion.a
        key='projectsNavCard'
        variants={navCard}
        className='p-6 border border-3 rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
      >
        <div className='flex flex-col items-center justify-center w-28 h-28'>
          <DiagramProjectIcon classes={'h-10'} />
          <h3 className='mt-4 text-2xl font-bold text-center'>Projects</h3>
        </div>
      </motion.a>
    </Link>
  );
};

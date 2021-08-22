import Link from 'next/link';
import { motion } from 'framer-motion';

import { navCard } from 'animations';

import { FileIcon } from '@/icons/FileIcon';

export const ResumeNavCard = () => {
  return (
    <Link href='/resume'>
      <motion.a
        key='ResumeNavCard'
        variants={navCard}
        className='p-6 border rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
      >
        <div className='flex flex-col items-center justify-center w-28 h-28'>
          <FileIcon classes={'h-10'} />
          <h3 className='mt-4 text-2xl font-bold text-center'>Resum&#xe9;</h3>
        </div>
      </motion.a>
    </Link>
  );
};

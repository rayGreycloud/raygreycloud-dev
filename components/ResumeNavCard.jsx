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
        className='w-60 p-6 border rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
      >
        <div className='flex items-center justify-center'>
          <FileIcon classes={'h-6 mr-3'} />
          <h3 className='text-2xl font-bold text-center'>Resume</h3>
        </div>
        <p className='mt-4 text-xl text-center'>View my resume</p>
      </motion.a>
    </Link>
  );
};

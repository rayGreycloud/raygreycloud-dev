import Link from 'next/link';
import { motion } from 'framer-motion';

import { navCard } from 'animations';

import { ChalkboardUserIcon } from '@/icons/ChalkboardUserIcon';

export const AboutNavCard = () => {
  return (
    <Link href='/about'>
      <motion.a
        key='aboutNavCard'
        variants={navCard}
        className='p-6 border rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
      >
        <div className='flex flex-col items-center justify-center w-28 h-28'>
          <ChalkboardUserIcon classes={'h-10'} />
          <h3 className='mt-4 text-2xl font-bold text-center'>About</h3>
        </div>
      </motion.a>
    </Link>
  );
};

import Link from 'next/link';
import { motion } from 'framer-motion';

import { navCard } from 'animations';

import { PaperPlaneIcon } from '@/icons/PaperPlaneIcon';

export const ContactNavCard = () => {
  return (
    <Link href='/contact'>
      <motion.a
        key='contactNavCard'
        variants={navCard}
        className='p-6 border rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
      >
        <div className='flex flex-col items-center justify-center w-28 h-28'>
          <PaperPlaneIcon classes={'h-10'} />
          <h3 className='mt-4 text-2xl font-bold text-center'>Contact</h3>
        </div>
      </motion.a>
    </Link>
  );
};

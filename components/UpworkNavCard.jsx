import { motion } from 'framer-motion';

import { navCard } from 'animations';

import { UpIcon } from '@/icons/UpIcon';
import { UpworkIcon } from '@/icons/UpworkIcon';

export const UpworkNavCard = () => {
  return (
    <motion.a
      key='upworkNavCard'
      variants={navCard}
      href='https://www.upwork.com/freelancers/~01661b7cf04e0b36be'
      target='_blank'
      rel='noopener noreferrer'
      className='p-6 border rounded-xl group hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
      title='See my Upwork profile'
    >
      <div className='flex flex-col items-center justify-center w-28 h-28'>
        <UpIcon classes={'w-10 h-10'} />
        <UpworkIcon classes={'mt-4 h-7'} />
      </div>
    </motion.a>
  );
};

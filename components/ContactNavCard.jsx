import { motion } from 'framer-motion';

import { navCard } from 'animations';

import { PaperPlaneIcon } from '@/icons/PaperPlaneIcon';

export const ContactNavCard = () => {
  return (
    <motion.a
      key='contactNavCard'
      variants={navCard}
      href='mailto:raygreycloud@gmail.com'
      target='_blank'
      rel='noopener noreferrer'
      className='w-60 p-6 border rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
    >
      <div className='flex items-center justify-center'>
        <PaperPlaneIcon classes={'h-7 mr-3'} />
        <h3 className='text-2xl font-bold text-center'>Contact</h3>
      </div>
      <p className='mt-4 text-xl text-center'>Email me</p>
    </motion.a>
  );
};

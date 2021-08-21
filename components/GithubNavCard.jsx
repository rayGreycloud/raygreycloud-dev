import { motion } from 'framer-motion';

import { navCard } from 'animations';

import { GithubIcon } from '@/icons/GithubIcon';

export const GithubNavCard = () => {
  return (
    <motion.a
      key='githubNavCard'
      variants={navCard}
      href='https://github.com/rayGreycloud'
      target='_blank'
      rel='noopener noreferrer'
      className='p-6 border rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
    >
      <div className='flex items-center justify-center'>
        <GithubIcon classes={'h-7 mr-3'} />
        <h3 className='text-2xl font-bold text-center'>GitHub</h3>
      </div>
      <p className='mt-4 text-xl text-center'>See my GitHub profile</p>
    </motion.a>
  );
};

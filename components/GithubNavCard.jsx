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
      title='See my GitHub profile'
    >
      <div className='flex flex-col items-center justify-center w-28 h-28'>
        <GithubIcon classes={'h-10'} />
        <h3 className='mt-4 text-2xl font-bold text-center'>GitHub</h3>
      </div>
    </motion.a>
  );
};

import { EmailIcon } from '@/icons/EmailIcon';
import { EnvelopeIcon } from '@/icons/EnvelopeIcon';
import { TwitterIcon } from '@/icons/TwitterIcon';

import { motion } from 'framer-motion';

import { navCard, navCardContainer } from 'animations';

export default function ContactPage() {
  return (
    <main className='flex flex-col items-center w-full flex-1 pt-16 md:pt-24 md:px-20 text-center'>
      <h1 className='text-3xl md:text-6xl font-bold mb-8'>
        <div className='text-green-600'>Contact Me</div>
      </h1>
      <motion.div
        key='contactContainer'
        variants={navCardContainer}
        initial='hidden'
        animate='show'
        exit='exit'
        className='flex items-center justify-between gap-8 pt-4'
      >
        <motion.a
          variants={navCard}
          key='emailMeBtn'
          href='mailto:raygreycloud@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center rounded-xl'
          title='Email me'
        >
          <EnvelopeIcon classes={'w-16 h-16'} />
        </motion.a>
        <motion.a
          variants={navCard}
          key='twitterBtn'
          href='https://twitter.com/intent/user?user_id=1038860382796836864'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center rounded-full '
          title='My twitter'
        >
          <TwitterIcon classes={'w-16 h-16'} />
        </motion.a>
      </motion.div>
    </main>
  );
}

import { EmailIcon } from '@/icons/EmailIcon';
import { EnvelopeIcon } from '@/icons/EnvelopeIcon';
import { LinkSimpleIcon } from '@/components/icons/LinkSimpleIcon';

import { motion } from 'framer-motion';

import { navCard, navCardContainer } from 'animations';

export default function ChatbotPage() {
  return (
    <main className='flex flex-col items-center w-full flex-1 pt-16 md:pt-24 md:px-20 text-center'>
      <h1 className='mb-4'>
        <div className='text-3xl md:text-6xl font-bold text-green-600'>
          Chat Persona
        </div>
        <div className='text-lg text-white'>
          OpenAI-powered Chatbot with multiple personalities
        </div>
      </h1>
      <motion.div
        key='contactContainer'
        variants={navCardContainer}
        initial='hidden'
        animate='show'
        exit='exit'
        className='flex items-center justify-between gap-8'
      >
        <motion.a
          variants={navCard}
          key='chatPersonaLink'
          href='https://chat-persona.herokuapp.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-end justify-center text-blue-600'
          title='Go to Chat Persona'
        >
          <LinkSimpleIcon classes={'w-6 h-6'} />
          <span className='pl-4 text-lg'>chat-persona.herokuapp.com</span>
        </motion.a>
      </motion.div>
    </main>
  );
}

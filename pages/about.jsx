import { motion } from 'framer-motion';

import { GithubNavCard } from '@/components/GithubNavCard';
import { LinkedInNavCard } from '@/components/LinkedInNavCard';
import { UpworkNavCard } from '@/components/UpworkNavCard';
import { ResumeNavCard } from '@/components/ResumeNavCard';

import { navCardContainer } from 'animations';

/**
 * TODO:
 * Need to replace nav cards with narrative section
 * Describe my journey to becoming a developer
 * What I've done so far
 */
export default function AboutPage() {
  return (
    <main className='flex flex-col items-center w-full flex-1 pt-16 pl-2.5 md:pt-20 md:px-20 mb-10 text-center'>
      <h1 className='text-3xl md:text-6xl font-bold md:mb-8'>
        <div className='text-green-600'>About Me</div>
      </h1>
      <motion.div
        key='aboutCardsContainer'
        variants={navCardContainer}
        initial='hidden'
        animate='show'
        exit='exit'
        className='flex flex-wrap flex-col md:flex-row md:items-center md:justify-around gap-8 max-w-4xl mt-8 md:mt-12sm:w-full'
      >
        <GithubNavCard />

        <UpworkNavCard />

        <LinkedInNavCard />

        <ResumeNavCard />
      </motion.div>
    </main>
  );
}

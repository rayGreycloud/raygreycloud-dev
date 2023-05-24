import { motion } from 'framer-motion';

import { GithubNavCard } from '@/components/GithubNavCard';
import { LinkedInNavCard } from '@/components/LinkedInNavCard';
import { UpworkNavCard } from '@/components/UpworkNavCard';
import { ResumeNavCard } from '@/components/ResumeNavCard';

import { navCardContainer } from 'animations';

export default function AboutPage() {
  return (
    <main className='flex flex-col items-center w-full flex-1 pt-16 pl-2.5 md:pt-20 md:px-20 mb-10 text-center'>
      <h1 className='text-3xl md:text-6xl font-bold md:mb-8'>
        <div className='text-green-600'>About Me</div>
      </h1>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='relative isolate overflow-hidden bg-gray-900 px-16 py-12 text-center shadow-2xl sm:rounded-3xl'>
          <div className='text-lg text-left leading-8 text-gray-300'>
            <p>
              Hello there. My name is Ray Greycloud and I'm a freelance web
              developer based out of Eugene, Oregon, USA. I specialize in
              front-end React development and full-stack development with the
              MERN stack (MongoDB, Express.js, React & Node.js). My professional
              experience ranges from creating new web applications to
              refactoring and updating legacy enterprise-level applications.
            </p>
            <p className='mt-4'>
              I've been doing freelance development work for 5 years, primarily
              on Upwork.com where I have a 100% success rating. Prior to this, I
              studied web development for more than 2 years, earning 29 course
              certificates on Udemy.com. I regularly learn new technologies to
              order to expand my skillset and keep up with the latest trends in
              web development.
            </p>
            <p className='mt-4'>
              I enjoy collaborating with others with the goal of producing
              clean, maintainable code. I would welcome an opportunity to
              discuss my qualifications and what I can do for you.
            </p>
          </div>
        </div>
      </div>

      <div className='mt-12 mb-16 md:mt-12 '>
        <h2 className='text-2xl md:text-5xl font-bold md:mb-8'>
          <div className='text-green-600'>Learn More</div>
        </h2>
        <motion.div
          key='aboutCardsContainer'
          variants={navCardContainer}
          initial='hidden'
          animate='show'
          exit='exit'
          className='flex flex-wrap flex-col md:flex-row md:items-center md:justify-around gap-8 max-w-4xl sm:w-full'
        >
          <GithubNavCard />

          <UpworkNavCard />

          <LinkedInNavCard />

          <ResumeNavCard />
        </motion.div>
      </div>
    </main>
  );
}

import { motion } from 'framer-motion';

import { ContactNavCard } from '@/components/ContactNavCard';
import { AboutNavCard } from '@/components/AboutNavCard';
import { ProjectsNavCard } from '@/components/ProjectsNavCard';

import { navCardContainer, pageHeader, pageSubheader } from 'animations';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full flex-1 pt-16 md:pt-24 md:px-20 mb-10 text-center'>
      <motion.div
        key='homePageHeader'
        initial='hidden'
        animate='visible'
        variants={pageHeader}
      >
        <h1 className='text-3xl md:text-6xl font-bold'>
          <div className='text-green-600'>ray greycloud</div>
        </h1>
      </motion.div>
      <motion.div
        key='homePageSubheader'
        initial='hidden'
        animate='visible'
        variants={pageSubheader}
      >
        <p className='mt-3 text-lg md:text-2xl'>javascript/react developer</p>
      </motion.div>

      <motion.div
        key='navCardsContainer'
        variants={navCardContainer}
        initial='hidden'
        animate='show'
        exit='exit'
        className='flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-around gap-y-8 mt-8 md:mt-12 md:mt-18 sm:w-full max-w-2xl'
      >
        <AboutNavCard />

        <ProjectsNavCard />

        <ContactNavCard />
      </motion.div>
    </main>
  );
}

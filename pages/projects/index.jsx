import { motion } from 'framer-motion';

import { API_URL } from '../../config/index';

import { ProjectCard } from '@/components/ProjectCard';

import { fadeCardsParent } from 'animations';

export default function ProjectsPage({ projects }) {
  return (
    <main className='flex flex-col items-center w-full flex-1 pt-16 md:pt-24 md:px-20 mb-10 text-center'>
      <h1 className='text-3xl md:text-6xl font-bold mb-8'>
        <div className='text-green-600'>Recent Projects</div>
      </h1>
      <motion.div
        key='projectCardsContainer'
        variants={fadeCardsParent}
        initial='hidden'
        animate='show'
        exit='exit'
        className='flex flex-wrap items-center justify-around gap-6 py-4 w-100 md:w-2/3'
      >
        {projects &&
          projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
      </motion.div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/api/projects`);
  const projects = await res.json();

  return {
    props: { projects }
  };
};

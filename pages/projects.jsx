import { ProjectCard } from '@/components/ProjectCard';

import projectData from '../util/projects.json';

export default function ProjectsPage() {
  const { projects } = projectData;

  return (
    <main className='flex flex-col items-center w-full flex-1 pt-16 md:pt-20 md:px-20 mb-10 text-center'>
      <h1 className='text-3xl md:text-6xl font-bold mb-8'>
        <div className='text-green-600'>Recent Projects</div>
      </h1>
      <div className='flex flex-wrap items-center justify-around gap-4 mb-4 w-100 md:w-2/3'>
        {projects &&
          projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
      </div>
    </main>
  );
}

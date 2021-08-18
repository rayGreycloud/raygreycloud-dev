import { ProjectCard } from '../components/ProjectCard';

import projectData from '../util/projects.json';

const ProjectsPage = () => {
  // const projectData = JSON.parse(data);

  const { projects } = projectData;
  console.log('projects: ', projects);

  return (
    <main className='flex flex-col items-center w-full flex-1 md:pt-8 md:px-20 text-center'>
      <h1 className='text-3xl md:text-6xl font-bold mb-8'>
        <div className='text-green-600'>Recent Projects</div>
      </h1>
      <div className='flex flex-wrap items-center justify-around gap-4 w-100 md:w-2/3'>
        {projects &&
          projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
      </div>
    </main>
  );
};

export default ProjectsPage;

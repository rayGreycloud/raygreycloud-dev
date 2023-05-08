import { ProjectDisplay } from '@/components/ProjectDisplay';

import { BackButton } from '@/components/BackButton';

import { API_URL } from '../../config/index';

const Project = ({ project }) => {
  return (
    <div className='relative'>
      <BackButton styleClasses={'pt-16 md:pt-20 pl-2 sm:pl-6 lg:pl-8'} />
      <main className='flex flex-col items-center w-full sm:w-5/6 max-w-3xl mx-auto flex-1 pl-2.5 mb-10'>
        <ProjectDisplay project={project} />
      </main>
    </div>
  );
};

export default Project;

export const getServerSideProps = async (context) => {
  const { projectId } = context.params;
  const res = await fetch(`${API_URL}/api/projects/${projectId}`);
  const project = await res.json();

  return {
    props: { project }
  };
};

import { useRouter } from 'next/router';

import {
  CodeBracketSquareIcon,
  LinkIcon,
  UserCircleIcon
} from '@heroicons/react/24/solid';

import Badge from '@/components/Badge';

import { API_URL } from '../../config/index';

const Project = ({ project }) => {
  const router = useRouter();
  const { projectId } = router.query;
  console.log('project: ', project);

  /**  
  sections: 
  1. My title; What I did; UserCircleIcon
  2. Technologies used; CodeBracketSquareIcon
  3. Links
  4. Screenshots
  */

  const badgeColor = (type) => {
    switch (type) {
      case 'React':
        return 'cyan';
      case 'React Query':
      case 'Redux':
        return 'indigo';
      case 'React Hook Form':
        return 'rose';
      case 'MongoDB':
        return 'green';
      case 'NodeJS':
      case 'Flask':
        return 'lime';
      case 'Express':
        return 'sky';
      case 'MailgunJS':
      case 'Typescript':
        return 'red';
      case 'Xumm':
        return 'blue';
      case 'MapboxJS':
      case 'Cloudinary':
      case 'SyncFusion':
        return 'orange';
      case 'Contentful':
      case 'Sass/SCSS':
        return 'yellow';
      default:
        return 'gray';
    }
  };

  return (
    <main className='flex flex-col items-center w-full flex-1 py-16 pl-2.5 md:pt-20 md:px-20 mb-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-base font-semibold leading-7 text-green-600'>
            {project.type}
          </h2>
          <div className='flex items-center justify-center gap-4 mt-4 text-xl text-white'>
            <div className='font-light leading-8 uppercase'>
              {project.client}
            </div>
          </div>
          <p className='mt-1 text-xl font-bold tracking-tight text-white sm:text-4xl'>
            {project.name}
          </p>
          <p className='mt-4 text-lg leading-6 text-gray-300'>
            {project.description}
          </p>
        </div>
      </div>

      <div className='mx-auto mt-16 max-w-7xl px-6 lg:px-8'>
        <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none xl:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
          <div className='relative pl-9'>
            <div className='pb-2 flex items-center gap-2 font-semibold text-white'>
              <UserCircleIcon
                className='left-1 h-12 w-12 text-border-green-600'
                aria-hidden='true'
              />
              <span className='text-2xl uppercase'>Project Role</span>
            </div>
            <div className='text-2xl pl-2'>{project.role}</div>
          </div>
          <div className='relative pl-9'>
            <div className='pb-2 flex items-center gap-2 font-semibold text-white'>
              <CodeBracketSquareIcon
                className='left-1 h-12 w-12 text-border-green-600'
                aria-hidden='true'
              />
              <span className='text-2xl uppercase'>Technologies Used</span>
            </div>
            <div className='flex flex-wrap gap-1 pl-1'>
              {project.tech.map((item) => (
                <Badge key={item} color={badgeColor(item)}>
                  <span>{item}</span>
                </Badge>
              ))}
            </div>
          </div>
          <div className='relative pl-9'>
            <div className='pb-2 flex items-center gap-2 font-semibold text-white'>
              <LinkIcon
                className='left-1 h-10 w-10 text-border-green-600'
                aria-hidden='true'
              />
              <span className='text-2xl uppercase'>Learn More</span>
            </div>
            <div className='pl-2'>
              {project.clientUrl && (
                <p>
                  <a
                    href={project.clientUrl}
                    className='text-sm font-semibold leading-6 text-indigo-400'
                    target='_blank'
                  >
                    {project.client} <span aria-hidden='true'>→</span>
                  </a>
                </p>
              )}
            </div>
            <div className='pl-2'>
              {project.appUrl && (
                <p>
                  <a
                    href={project.appUrl}
                    className='text-med font-semibold leading-6 text-indigo-400'
                    target='_blank'
                  >
                    Live App <span aria-hidden='true'>→</span>
                  </a>
                </p>
              )}
            </div>
          </div>
        </dl>
      </div>
    </main>
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

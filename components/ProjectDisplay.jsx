import Badge from '@/components/Badge';

import { getBadgeColor } from 'utils/color';

export const ProjectDisplay = ({ project }) => {
  return (
    <div className='relative w-full'>
      <div className='px-4 sm:px-0'>
        <h3 className='text-lg font-semibold leading-7 text-green-600'>
          Project Information
        </h3>
      </div>
      <div className='mt-6 border-t border-white/10'>
        <dl className='divide-y divide-white/10'>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white'>Client</dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0'>
              {project.client}
            </dd>
          </div>

          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white'>
              Project Name
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0'>
              {project.name}
            </dd>
          </div>

          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white'>
              Description
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0'>
              {project.description}
            </dd>
          </div>

          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white'>
              Project Type
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0'>
              {project.type}
            </dd>
          </div>

          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white'>Role</dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0'>
              <div>{project.role}</div>
              <div>{project.work}</div>
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-white'>
              Technologies Used
            </dt>
            <dd className='flex flex-wrap gap-1 md:gap-4 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0'>
              {project.tech.map((item) => (
                <Badge key={item} color={getBadgeColor(item)}>
                  <span>{item}</span>
                </Badge>
              ))}
            </dd>
          </div>
          {project.appUrl && (
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-white'>
                Live App
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0'>
                <a
                  href={project.appUrl}
                  className='text-med font-semibold leading-6 text-indigo-400'
                  target='_blank'
                  rel='noreferrer'
                >
                  {project.appUrl}
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

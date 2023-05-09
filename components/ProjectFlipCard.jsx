import Link from 'next/link';
import { motion } from 'framer-motion';

import { fadeCard } from 'animations';

import { GithubCornerBanner } from './GithubCornerBanner';

export const ProjectCard = ({ data }) => {
  return (
    <motion.div
      key={`projectCard-${data.id}`}
      variants={fadeCard}
      className='flip-container cursor-pointer'
    >
      <Link href={`/projects/${data.id}`}>
        <div className='flip-card'>
          <div className='flip-front'>
            {/* <div className='text-center'>{data.name}</div> */}
            <img src={data.screenshot} alt='' className='flip-img' />
          </div>
          <div className='flip-back'>
            <div className='flip-content max-w-md bg-gray-300 shadow overflow-hidden sm:rounded-lg relative'>
              {/* {data.repoUrl && (
                <GithubCornerBanner
                  classes='absolute top-0 right-0'
                  repoUrl={data.repoUrl}
                />
              )} */}
              <div className='text-gray-900 pb-4'>
                <div className='text-gray-600'>Client: </div>
                <div className='uppercase'>{data.client}</div>
              </div>

              <div className='px-4 py-4 sm:px-6 border-t border-gray-200'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  {data.name}
                </h3>
                <p className='mt-1 max-w-lg text-sm text-gray-700'>
                  {data.description}
                </p>
              </div>
              <div className='text-gray-900 border-t border-gray-200 flex flex-col py-4'>
                <div>
                  <div className='text-gray-600'>Role: </div>
                  <div className='uppercase'>{data.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

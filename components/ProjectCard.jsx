import Link from 'next/link';
import { motion } from 'framer-motion';

import { fadeCard } from 'animations';

export const ProjectCard = ({ data }) => {
  return (
    <motion.div
      key={`projectCard-${data.id}`}
      variants={fadeCard}
      className='w-[20rem] h-[24rem] overflow-hidden rounded cursor-pointer'
    >
      <Link href={`/projects/${data.id}`}>
        <div className='rounded-lg overflow-hidden flex flex-col divide-y divide-gray-200  text-center shadow'>
          <div className='bg-gray-300 p-2'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              {data.name}
            </h3>
            <div className='text-gray-900 uppercase'>{data.client}</div>
          </div>
          <img src={data.projectImg} alt='' className='object-cover' />
        </div>
      </Link>
    </motion.div>
  );
};

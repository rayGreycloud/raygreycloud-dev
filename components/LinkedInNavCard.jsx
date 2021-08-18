import { LinkedInIcon } from './icons/LinkedInIcon';

export const LinkedInNavCard = () => {
  return (
    <a
      href='https://www.linkedin.com/in/raygreycloud/'
      target='_blank'
      rel='noopener noreferrer'
      className='p-6 border rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
    >
      <div className='flex items-center justify-center'>
        <LinkedInIcon classes={'h-7 mr-3'} />
        <h3 className='text-2xl font-bold text-center'>LinkedIn</h3>
      </div>
      <p className='mt-4 text-xl text-center'>See my LinkedIn profile</p>
    </a>
  );
};

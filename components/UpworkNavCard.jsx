import { UpworkIcon } from './icons/UpworkIcon';

export const UpworkNavCard = () => {
  return (
    <a
      href='https://www.upwork.com/freelancers/~01661b7cf04e0b36be'
      target='_blank'
      rel='noopener noreferrer'
      className='p-6 border rounded-xl hover:border-green-600 focus:border-green-600 hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
    >
      <div className='flex items-center justify-center'>
        <UpworkIcon classes={'h-7 mr-3'} />
      </div>
      <p className='mt-4 text-xl text-center'>See my Upwork profile</p>
    </a>
  );
};

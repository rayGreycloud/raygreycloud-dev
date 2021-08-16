import { GithubIcon } from './GithubIcon';

export const GithubNavCard = () => {
  return (
    <a
      href='https://github.com/rayGreycloud'
      target='_blank'
      rel='noopener noreferrer'
      className='p-6 mt-6 border rounded-xl hover:border-green-600 hover:text-green-600 focus:text-green-600'
    >
      <div className='flex items-center justify-center'>
        <GithubIcon classes={'h-7 mr-3'} />
        <h3 className='text-2xl font-bold text-center'>GitHub</h3>
      </div>
      <p className='mt-4 text-xl text-center'>See my GitHub profile</p>
    </a>
  );
};

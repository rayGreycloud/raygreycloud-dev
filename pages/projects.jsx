import { GithubCornerBanner } from '../components/GithubCornerBanner';

const ProjectsPage = () => {
  return (
    <main className='flex flex-col items-center w-full flex-1 pt-20 px-20 text-center'>
      <h1 className='text-6xl font-bold mb-6'>
        <div className='text-green-600'>Recent Projects</div>
      </h1>

      <div className='max-w-md bg-gray-300 shadow overflow-hidden sm:rounded-lg relative'>
        <GithubCornerBanner className='absolute t-0 r-0' />
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            App Name
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            Short Description
          </p>
        </div>
        <div className='text-gray-900 border-t border-gray-200 px-6 py-3 flex flex-col justify-between'>
          <span className=''>Role:</span>
          <span className='uppercase'>Full-stack Developer</span>
        </div>
        <button
          type='button'
          className='my-6 inline-flex items-center justify-center px-4 py-2 border border-transparent font-md rounded-md text-white hover:text-green-600 bg-green-600 hover:bg-white'
        >
          <a
            href='https://pub-sq.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-lg'
          >
            Public Square
          </a>
        </button>
      </div>
    </main>
  );
};

export default ProjectsPage;

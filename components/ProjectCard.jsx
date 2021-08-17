import { GithubCornerBanner } from './GithubCornerBanner';

export const ProjectCard = ({ data }) => {
  return (
    <div className='flip-container'>
      <div className='flip-card'>
        <div className='flip-front'>
          {/* <div className='text-center'>{data.name}</div> */}
          <img src={data.screenshot} alt='' className='flip-img' />
        </div>
        <div className='flip-back'>
          <div className='flip-content max-w-md bg-gray-300 shadow overflow-hidden sm:rounded-lg relative'>
            {data.repoUrl && (
              <GithubCornerBanner
                classes='absolute top-0 right-0'
                repoUrl={data.repoUrl}
              />
            )}
            <div className='px-4 py-4 sm:px-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                {data.name}
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                {data.description}
              </p>
            </div>
            <div className='text-gray-900 border-t border-gray-200 flex flex-col pt-5'>
              <div>
                <div>Client: </div>
                <div className='uppercase'>{data.client}</div>
              </div>
              <div className='mt-2'>
                <div>Role: </div>
                <div className='uppercase'>{data.role}</div>
              </div>
            </div>
            <button
              type='button'
              className='mt-4 mb-3 inline-flex items-center justify-center px-4 py-2 border border-transparent font-md rounded-md text-white hover:text-green-600 bg-green-600 hover:bg-white'
            >
              <a
                href={data.appUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg'
              >
                {data.name}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

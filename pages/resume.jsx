import { DownloadIcon } from '../components/icons/DownloadIcon';

const ResumePage = () => {
  return (
    <main className='flex flex-col items-center w-full flex-1 md:pt-20 md:px-20 text-center'>
      <h1 className='text-3xl md:text-6xl font-bold'>
        <div className='text-green-600'>Resume</div>
      </h1>
      <a
        className='my-3 uppercase flex items-baseline'
        href='./resume-ray-greycloud.pdf'
        download
      >
        <DownloadIcon classes={'h-6 mr-3'} />
        <span>Download resume</span>
      </a>
      <div>
        <img
          className=' md:w-2/3 h-auto mx-auto'
          src='./resume-ray-greycloud.png'
        />
      </div>
    </main>
  );
};

export default ResumePage;

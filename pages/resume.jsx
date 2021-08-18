import { DownloadIcon } from '../components/icons/DownloadIcon';

const ResumePage = () => {
  return (
    <main className='flex flex-col items-center w-full flex-1 md:pt-8 md:px-20 text-center'>
      <h1 className='text-3xl md:text-6xl font-bold'>
        <div className='text-green-600'>Resume</div>
      </h1>
      <a
        className='my-3 uppercase flex items-baseline hover:text-green-600 transition transform hover:scale-125'
        href='./resume-ray-greycloud.pdf'
        download
      >
        <DownloadIcon classes={'h-6 mr-3'} />
        <span>Download resume</span>
      </a>
      <div className='border-t mb-4' style={{ width: '96.4%' }} />
      <div>
        <img className='mx-auto' src='./resume-ray-greycloud.jpg' />
      </div>
    </main>
  );
};

export default ResumePage;

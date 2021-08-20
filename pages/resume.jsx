import { DownloadIcon } from '@/components/icons/DownloadIcon';

export default function ResumePage() {
  return (
    <main className='flex flex-col items-center w-full flex-1 pt-16 md:pt-20 md:px-20 text-center'>
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
      <div className='mb-20'>
        <img className='mx-auto' src='./resume-ray-greycloud.jpg' />
      </div>
    </main>
  );
}

import { DownloadIcon } from '@/components/icons/DownloadIcon';

export default function ResumePage() {
  return (
    <main className='flex flex-col items-center flex-1 pt-16 md:pt-24 md:px-20 text-center w-full'>
      <div className='max-w-2xl'>
        <div className='relative flex flex-col md:flex-row items-center md:items-baseline md:justify-center w-full'>
          <h1 className='text-3xl md:text-6xl font-bold text-green-600'>
            Resum&#xe9;
          </h1>

          <a
            className='md:absolute bottom-0 right-0 uppercase flex items-baseline hover:text-green-600 transition transform hover:scale-125'
            href='/assets/resume2022-ray-greycloud.pdf'
            download
          >
            <DownloadIcon classes={'h-6 mr-3'} />
            <span>Download</span>
          </a>
        </div>
        <div className='mt-4 mb-20'>
          <img
            className='mx-auto pl-2.5 md:pl-0'
            src='/assets/resume2022-ray-greycloud.jpg'
          />
        </div>
      </div>
    </main>
  );
}

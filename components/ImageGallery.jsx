import Image from 'next/image';

export const ImageGallery = ({ imageUrls }) => {
  return (
    <div className='container mx-auto mb-10 px-5 py-2'>
      <div className='-m-1 flex flex-wrap md:-m-2'>
        {imageUrls.map((url, index) => (
          <div key={index} className='flex w-1/3 flex-wrap'>
            <div className='w-full p-1 md:p-2'>
              <img
                alt='gallery'
                className='block h-full w-full rounded-lg object-cover object-center'
                src={url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

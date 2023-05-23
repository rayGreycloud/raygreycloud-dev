import { useRef } from 'react';
// import Image from 'next/image';

import ImageModal from './ImageModal';

const ImageContainer = ({ url }) => {
  const modalRef = useRef(null);

  const handleOpen = () => {
    modalRef.current.showModal();
  };

  return (
    <>
      <div className='flex w-1/3 flex-wrap' onClick={handleOpen}>
        <div className='w-full p-1 md:p-2'>
          <img
            alt='gallery'
            className='block h-full w-full rounded-lg object-cover object-center'
            src={url}
          />
        </div>
      </div>

      <ImageModal modalRef={modalRef} imageUrl={url} />
    </>
  );
};

export default ImageContainer;

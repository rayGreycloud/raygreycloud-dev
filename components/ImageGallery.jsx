// import { useRef } from 'react';
import ImageContainer from './ImageContainer';

// import { CarouselModal } from './CarouselModal';

export const ImageGallery = ({ imageUrls }) => {
  // const modalRef = useRef(null);

  // const handleOpen = () => {
  //   modalRef.current.showModal();
  // };

  return (
    <div className='container mx-auto mb-10 px-5 py-2'>
      <div className='-m-1 flex flex-wrap md:-m-2'>
        {imageUrls.map((url, index) => (
          <ImageContainer key={index} url={url} />
        ))}
      </div>

      {/* <CarouselModal modalRef={modalRef} imageUrls={imageUrls} /> */}
    </div>
  );
};

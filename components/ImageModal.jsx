const ImageModal = ({ modalRef, imageUrl }) => {
  const handleClose = (e) => {
    // const modalDimensions = modalRef.current.getBoundingClientRect();
    // if (
    //   e.clientX < modalDimensions.left ||
    //   e.clientX > modalDimensions.right ||
    //   e.clientY < modalDimensions.top ||
    //   e.clientY > modalDimensions.bottom
    // ) {
    //   console.log('outside click');
    //   modalRef.current.close();
    // }
    modalRef.current.close();
  };

  return (
    <dialog ref={modalRef} onClick={handleClose} className='p-4'>
      <img
        src={imageUrl}
        alt='gallery'
        className='block h-full w-full max-h-96 max-w-96 rounded-lg object-cover object-center'
      />
    </dialog>
  );
};

export default ImageModal;

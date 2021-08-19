export const Footer = () => (
  <footer className='place-self-end z-1020 hidden md:flex items-center justify-center w-full h-20 bg-gray-800'>
    <div className='border-t w-5/6 flex'>
      <div className='mx-auto w-fit flex items-center justify-center w-12 pt-3 text-sm'>
        Copyright © {new Date().getFullYear()} Ray Greycloud - All Rights
        Reserved
      </div>
    </div>
  </footer>
);

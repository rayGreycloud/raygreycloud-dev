export const Footer = () => (
  <footer className='place-self-end z-1020 hidden md:flex items-center justify-center w-full h-20 bg-gray-800'>
    <div className='border-t border-green-600 w-5/6 flex'>
      <div className='mx-auto w-fit flex items-center justify-center w-12 pt-3 text-sm text-green-600'>
        <span className='uppercase'>
          Copyright © {new Date().getFullYear()} - Ray Greycloud
        </span>
      </div>
    </div>
  </footer>
);

import { Footer } from './Footer';
import { Header } from './Header';
import { HeadTags } from './HeadTags';
import { ScrollWrapper } from './ScrollWrapper';

export const Layout = ({ children }) => {
  return (
    <div className='bg-black'>
      <div className='flex flex-col justify-between min-h-screen bg-gray-800 text-white mx-auto max-w-6xl'>
        <HeadTags />

        <Header />

        <ScrollWrapper>{children}</ScrollWrapper>
        <Footer />
      </div>
    </div>
  );
};

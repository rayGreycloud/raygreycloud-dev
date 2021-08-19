import { Footer } from './Footer';
import { Header } from './Header';
import { HeadTags } from './HeadTags';
import { ScrollWrapper } from './ScrollWrapper';

export const Layout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between min-h-screen bg-gray-800 text-white'>
      <HeadTags />

      <Header />

      <ScrollWrapper>{children}</ScrollWrapper>
      <Footer />
    </div>
  );
};

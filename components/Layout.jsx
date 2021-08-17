import Head from 'next/head';

import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white'>
      <Head>
        <title>ray greycloud</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      {children}

      <footer className='flex items-center justify-center w-full h-24'>
        <div className='border-t w-5/6'>
          <a
            className='flex items-center justify-center pt-3'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
          </a>
        </div>
      </footer>
    </div>
  );
}

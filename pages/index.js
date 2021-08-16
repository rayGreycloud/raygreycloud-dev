import Head from 'next/head';

import { ProjectsNavCard } from '../components/ProjectsNavCard';
import { GithubNavCard } from '../components/GithubNavCard';
import { UpworkNavCard } from '../components/UpworkNavCard';
import { LinkedInNavCard } from '../components/LinkedInNavCard';
import { ContactNavCard } from '../components/ContactNavCard';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white'>
      <Head>
        <title>ray greycloud</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center w-full flex-1 pt-20 px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          <div className='text-green-600'>ray greycloud</div>
        </h1>

        <p className='mt-3 text-2xl'>javascript/react developer</p>

        <div className='flex flex-wrap items-center justify-around max-w-4xl mt-20 sm:w-full'>
          <GithubNavCard />

          <UpworkNavCard />

          <LinkedInNavCard />

          <ProjectsNavCard />

          <ContactNavCard />
        </div>
      </main>

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

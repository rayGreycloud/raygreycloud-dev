import { ContactNavCard } from '@/components/ContactNavCard';
import { GithubNavCard } from '@/components/GithubNavCard';
import { LinkedInNavCard } from '@/components/LinkedInNavCard';
import { ProjectsNavCard } from '@/components/ProjectsNavCard';
import { ResumeNavCard } from '@/components/ResumeNavCard';
import { UpworkNavCard } from '@/components/UpworkNavCard';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full flex-1 pt-16 mb-10 md:pt-16 md:px-20 text-center'>
      <h1 className='text-3xl md:text-6xl font-bold'>
        <div className='text-green-600'>ray greycloud</div>
      </h1>

      <p className='mt-3 text-lg md:text-2xl'>javascript/react developer</p>

      <div className='flex flex-wrap items-center justify-around gap-y-8 max-w-4xl mt-8 md:mt-12 md:mt-18 sm:w-full'>
        <GithubNavCard />

        <UpworkNavCard />

        <LinkedInNavCard />

        <ResumeNavCard />

        <ProjectsNavCard />

        <ContactNavCard />
      </div>
    </main>
  );
}

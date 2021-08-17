import { ContactNavCard } from '../components/ContactNavCard';
import { GithubNavCard } from '../components/GithubNavCard';
import { LinkedInNavCard } from '../components/LinkedInNavCard';
import { ProjectsNavCard } from '../components/ProjectsNavCard';
import { ResumeNavCard } from '../components/ResumeNavCard';
import { UpworkNavCard } from '../components/UpworkNavCard';

export default function Home() {
  return (
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

        <ResumeNavCard />

        <ContactNavCard />
      </div>
    </main>
  );
}

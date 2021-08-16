import Head from 'next/head';

const ProjectsPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>ray greycloud</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1>Projects Page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          temporibus dolorem dicta.
        </p>
      </main>
    </div>
  );
};

export default ProjectsPage;

import Head from 'next/head';
import { useRouter } from 'next/router';

export const HeadTags = () => {
  const router = useRouter();

  const { pathname } = router;

  const titlePg =
    pathname === '/resume'
      ? 'Resume | '
      : pathname === '/projects'
      ? 'Projects | '
      : '';

  return (
    <Head>
      <title>{`${titlePg}Ray Greycloud`}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

import { AnimatePresence, motion } from 'framer-motion';

import '../styles/globals.css';

import { Layout } from '@/components/Layout';

import { page } from 'animations';

const App = ({ Component, pageProps, router }) => (
  <AnimatePresence>
    <Layout>
      <motion.div
        key={router.route}
        initial='hidden'
        animate='visible'
        variants={page}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  </AnimatePresence>
);

export default App;

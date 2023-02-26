import { Analytics } from '@vercel/analytics/reactvercel';

import Layout from '@/components/layout/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Analytics } from '@vercel/analytics/react';
import TagManager from 'react-gtm-module';
import * as fbq from '../helpers/fbpixel';

import Layout from '@/components/layout/layout';

import '@/styles/globals.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({ gtmlId: process.env.GTM_ID });
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

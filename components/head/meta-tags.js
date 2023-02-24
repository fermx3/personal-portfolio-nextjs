import { Fragment } from 'react';

const MetaTags = ({ title, desc, url, image }) => {
  return (
    <Fragment>
      {/* <!-- Primary Meta Tags --> */}
      <meta name='title' content={title} />
      <meta name='description' content={desc} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content={`https://www.webloom.com.mx/${url ? url : ''}`}
      />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={desc} />
      <meta
        property='og:image'
        content={image ? image : `/images/site/portada.jpg`}
      />

      {/* <!-- Twitter --> */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:url'
        content={`https://www.webloom.com.mx/${url ? url : ''}`}
      />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={desc} />
      <meta
        property='twitter:image'
        content={image ? `/images/site/${image}` : `/images/site/portada.jpg`}
      ></meta>
    </Fragment>
  );
};

export default MetaTags;

import MetaTags from '@/components/head/meta-tags';
import ProyectoItem from '@/components/portfolio/proyecto-item';
import { getPostDetails, getPostsSlugs } from '@/helpers/db-utils';
import Head from 'next/head';
import { Fragment } from 'react';

const PostDetails = ({ postData, fullCard }) => {
  const metaDesc = postData.desc.markdown.replace(/\*/g, '').slice(0, 160);

  return (
    <Fragment>
      <Head>
        <title>{`${postData.titulo} | Blog Webloom`}</title>
        <MetaTags
          title={`${postData.titulo} | Blog Webloom`}
          desc={metaDesc}
          url={`blog/${postData.slug}`}
          image={postData.featuredImage.url}
        />
      </Head>
      <ProyectoItem proyecto={postData} fullCard={fullCard} />
    </Fragment>
  );
};

export default PostDetails;

export const getStaticProps = async (context) => {
  const { postId } = context.params;

  const postData = await getPostDetails(postId);

  if (!postData) {
    return { notFound: true };
  }

  return {
    props: {
      postData,
      fullCard: true,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  //Convert to Featured
  const posts = await getPostsSlugs();

  return {
    paths: posts.map((post) => ({
      params: { postId: post.slug },
    })),
    fallback: 'blocking',
  };
};

import ProyectoItem from '@/components/portfolio/proyecto-item';
import { getPostDetails, getPostsSlugs } from '@/helpers/db-utils';

const PostDetails = ({ postData, fullCard }) => {
  return <ProyectoItem proyecto={postData} fullCard={fullCard} />;
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

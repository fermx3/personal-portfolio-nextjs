import CardGrid from '@/components/portfolio/card-grid';
import { getAllPosts } from '@/helpers/db-utils';
import classes from '../../styles/section.module.css';

const BlogPage = ({ posts }) => {
  return (
    <section className={classes.section}>
      <h1>Blog</h1>
      <CardGrid proyectos={posts} />
    </section>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 180,
  };
};

import MetaTags from '@/components/head/meta-tags';
import CardGrid from '@/components/portfolio/card-grid';
import { getAllPosts } from '@/helpers/db-utils';
import Head from 'next/head';
import classes from '../../styles/section.module.css';

const BlogPage = ({ posts }) => {
  return (
    <section className={classes.section}>
      <Head>
        <title>Blog | Webloom</title>
        <MetaTags
          title='Blog | Webloom'
          desc='Descubre nuestros artículos y consejos sobre desarrollo web, marketing y SEO en nuestro blog. Mantente al día con las últimas tendencias y noticias del mundo del diseño y desarrollo web.'
          url='blog'
        />
      </Head>
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

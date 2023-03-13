import CardGrid from '../portfolio/card-grid';
import Button from '../ui/button';

import classes from './blog-section.module.css';

const BlogSection = ({ proyectos }) => {
  return (
    <section id='blog' className={classes.blog}>
      <h2>Blog</h2>
      <CardGrid proyectos={proyectos} />
      <Button href='/blog'>Ver más</Button>
    </section>
  );
};

export default BlogSection;

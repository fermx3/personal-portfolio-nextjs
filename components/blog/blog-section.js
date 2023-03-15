import Section from '../layout/section';
import CardGrid from '../portfolio/card-grid';
import Button from '../ui/button';

const BlogSection = ({ proyectos }) => {
  return (
    <Section id='blog'>
      <h2>Blog</h2>
      <CardGrid proyectos={proyectos} />
      <Button href='/blog'>Ver más</Button>
    </Section>
  );
};

export default BlogSection;

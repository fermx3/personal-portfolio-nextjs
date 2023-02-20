import { request, gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import ProyectoItem from './proyecto-item';

const PortfolioSection = ({ proyectos }) => {
  return (
    <section id='portafolio'>
      <h2>Portafolio</h2>
      <div>
        {proyectos.map((proyecto) => (
          <ProyectoItem key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
      <Link href='/portafolio'>Ver más</Link>
    </section>
  );
};

export default PortfolioSection;

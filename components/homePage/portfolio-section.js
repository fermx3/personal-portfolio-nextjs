import { request, gql, GraphQLClient } from 'graphql-request';
import ProyectoItem from '../portfolio/proyecto-item';

const DUMMY_DATA = [
  {
    titulo: 'Proyecto 1',
    subtitulo: 'tipo de proyecto',
    tecnologias: ['react', 'js'],
    descripcion:
      'Este es el proyecto uno que fue realizado para bla bla bla...',
    img: '/images/proyectos/placeholder.jpg',
  },
  {
    titulo: 'Proyecto 2',
    subtitulo: 'tipo de proyecto',
    tecnologias: ['worpress', 'js'],
    descripcion: 'Este es el proyecto 2 que fue realizado para bla bla bla...',
    img: '/images/proyectos/placeholder.jpg',
  },
  {
    titulo: 'Proyecto 3',
    subtitulo: 'tipo de proyecto',
    tecnologias: ['react', 'js'],
    descripcion: 'Este es el proyecto 3 que fue realizado para bla bla bla...',
    img: '/images/proyectos/placeholder.jpg',
  },
];

const PortfolioSection = ({ proyectos }) => {
  console.log(proyectos);
  return (
    <section id='portafolio'>
      <h2>Portafolio</h2>
      <div>
        {proyectos.map((proyecto) => (
          <ProyectoItem key={proyecto.titulo} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

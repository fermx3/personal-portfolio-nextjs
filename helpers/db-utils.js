import { gql, request } from 'graphql-request';

const hygraphAPI = process.env.URL;

export async function getAllProyectos() {
  const query = gql`
    query MyQuery {
      proyectos(first: 4) {
        descripcion
        id
        img
        subtitulo
        tecnologias
        titulo
      }
    }
  `;

  const result = await request(hygraphAPI, query);

  const { proyectos } = result;

  return proyectos;
}

export async function getMoreProyectos(lastPost) {
  const query = gql`
    query MyQuery($skip: Int = ${lastPost}) {
      proyectos(skip: $skip) {
        descripcion
        id
        img
        subtitulo
        tecnologias
        titulo
      }
    }
  `;

  const result = await request(hygraphAPI, query);

  const { proyectos } = result;

  return proyectos;
}

export async function getFeaturedProyectos() {
  const query = gql`
    query MyQuery {
      proyectos(where: { isFeatured: true }, first: 4) {
        descripcion
        id
        img
        subtitulo
        tecnologias
        titulo
      }
    }
  `;

  const result = await request(hygraphAPI, query);

  const { proyectos } = result;

  return proyectos;
}

import { gql, request } from 'graphql-request';

const hygraphAPI = process.env.URL;

export async function getAllProyectos() {
  const query = gql`
    query AllProyectos {
      proyectos(first: 4, orderBy: createdAt_DESC) {
        desc {
          markdown
        }
        id
        subtitulo
        tecnologias
        titulo
        github
        website
        slug
      }
    }
  `;

  const result = await request(hygraphAPI, query);

  const { proyectos } = result;

  return proyectos;
}

export async function getMoreProyectos(lastPost) {
  const query = gql`
    query MoreProyectos($skip: Int = ${lastPost}) {
      proyectos(skip: $skip, first: 4, orderBy: createdAt_DESC) {
        desc {
          markdown
          }
        id
        subtitulo
        tecnologias
        titulo
        github
        website
        slug
      }
    }
  `;

  const result = await request(hygraphAPI, query);

  const { proyectos } = result;

  return proyectos;
}

export async function getFeaturedProyectos() {
  const query = gql`
    query FeaturedProyectos {
      proyectos(
        where: { isFeatured: true }
        first: 4
        orderBy: createdAt_DESC
      ) {
        desc {
          markdown
        }
        id
        subtitulo
        tecnologias
        titulo
        github
        website
        slug
      }
    }
  `;

  const result = await request(hygraphAPI, query);

  const { proyectos } = result;

  return proyectos;
}

import { gql, request } from 'graphql-request';

const hygraphAPI = process.env.HYGRAPH_URL;

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

export async function getMoreProyectos(lastPost, path, tecnologias) {
  const skip = Number(lastPost);

  let query;

  if (path === 'portafolio') {
    query = gql`
      query MoreProyectos($skip: Int) {
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
  } else {
    query = gql`
      query moreFilteredProyectos(
        $tecnologias_contains_all: [Tecnologias!]
        $skip: Int
      ) {
        proyectos(
          where: { tecnologias_contains_all: $tecnologias_contains_all }
          skip: $skip
          orderBy: createdAt_DESC
          first: 4
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
  }

  const result = await request(hygraphAPI, query, {
    skip,
    tecnologias_contains_all: tecnologias,
  });
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

export async function getFeaturedSlugs() {
  const query = gql`
    query FeaturedProyectos {
      proyectos(where: { isFeatured: true }) {
        slug
      }
    }
  `;

  const result = await request(hygraphAPI, query);
  const { proyectos } = result;
  return proyectos;
}

export async function getFilteredProyectos(filtros) {
  const query = gql`
    query getFilteredProyectos($tecnologias_contains_all: [Tecnologias!]) {
      proyectos(
        where: { tecnologias_contains_all: $tecnologias_contains_all }
        orderBy: createdAt_DESC
        first: 4
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

  const result = await request(hygraphAPI, query, {
    tecnologias_contains_all: filtros,
  });
  const { proyectos } = result;
  return proyectos;
}

export async function getProyectoDetails(slug) {
  const query = gql`
    query proyectoDetails($slug: String) {
      proyecto(where: { slug: $slug }) {
        desc {
          markdown
        }
        github
        id
        isFeatured
        slug
        subtitulo
        tecnologias
        titulo
        website
      }
    }
  `;

  const result = await request(hygraphAPI, query, { slug });
  const { proyecto } = result;
  return proyecto;
}

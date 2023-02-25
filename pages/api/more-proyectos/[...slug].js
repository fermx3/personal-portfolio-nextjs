import { getMoreProyectos } from '@/helpers/db-utils';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return;
  }

  const [length, path, ...tecnologias] = req.query.slug;

  const newProyectos = await getMoreProyectos(length, path, tecnologias);

  res.status(200).json({ proyectos: newProyectos });
}

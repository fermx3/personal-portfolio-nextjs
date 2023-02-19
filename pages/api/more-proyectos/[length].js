import { getMoreProyectos } from '@/helpers/db-utils';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return;
  }

  const length = req.query.length;

  const newProyectos = await getMoreProyectos(length);

  res.status(200).json({ proyectos: newProyectos });
}

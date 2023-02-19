import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const ProyectoItem = ({ proyecto }) => {
  const { titulo, subtitulo, tecnologias, descripcion, img, desc } = proyecto;

  return (
    <div>
      <div>
        <h3>{titulo}</h3>
        <h4>{subtitulo}</h4>
        {tecnologias.map((tecnologia) => (
          <p key={tecnologia}>{tecnologia}</p>
        ))}
      </div>
      <div>{desc && <ReactMarkdown>{desc.markdown}</ReactMarkdown>}</div>
      <div>
        <Image
          src={`/images/proyectos/${img}.jpg`}
          alt={titulo}
          height={300}
          width={600}
        />
      </div>
    </div>
  );
};

export default ProyectoItem;

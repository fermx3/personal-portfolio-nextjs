import Image from 'next/image';

const ProyectoItem = ({ proyecto }) => {
  const { titulo, subtitulo, tecnologias, descripcion, img } = proyecto;

  return (
    <div>
      <div>
        <h3>{titulo}</h3>
        <h4>{subtitulo}</h4>
        {tecnologias.map((tecnologia) => (
          <p key={tecnologia}>{tecnologia}</p>
        ))}
      </div>
      <div>{descripcion}</div>
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

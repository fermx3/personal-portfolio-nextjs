import Image from 'next/image';

const Icon = ({ src, caption, alt }) => {
  return (
    <figure>
      <Image src={src} alt={caption || alt} width={30} height={30} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Icon;

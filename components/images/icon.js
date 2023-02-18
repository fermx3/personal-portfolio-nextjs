import Image from 'next/image';

const Icon = ({ src, alt, caption }) => {
  return (
    <figure>
      <Image src={src} alt={alt} width={30} height={30} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Icon;

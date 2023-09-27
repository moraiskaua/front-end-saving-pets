import Image from 'next/image';

interface propsCardsImages {
  image: string;
}

const CardImages = ({ image }: propsCardsImages) => {
  return (
    <Image
      className="shadow-lg transition-all hover:scale-110 rounded-lg h-60"
      src={image}
      alt="fotos Galeria"
      width={384}
      height={240}
    />
  );
};

export default CardImages;

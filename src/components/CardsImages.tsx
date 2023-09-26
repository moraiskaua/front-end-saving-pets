import Image from 'next/image';

interface propsCardsImages {
  image: string;
}

const CardImages = ({ image }: propsCardsImages) => {
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-lg transition-all hover:scale-110 w-96 h-60">
        <Image
          className="rounded-lg"
          src={image}
          alt="fotos Galeria"
          width={384}
          height={240}
        />
      </div>
    </>
  );
};

export default CardImages;

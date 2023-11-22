import Image from 'next/image';

interface CardsImagesProps {
  onClick: (image: string) => void;
  selectedImage: string;
  imageUrl: string;
}

const CardImages = ({ imageUrl, selectedImage, onClick }: CardsImagesProps) => {
  return (
    <Image
      className="shadow-lg transition-all hover:scale-110 rounded-lg h-60 cursor-pointer"
      src={imageUrl}
      alt="Fotos galeria"
      width={384}
      height={240}
      onClick={() => onClick(selectedImage)}
    />
  );
};

export default CardImages;

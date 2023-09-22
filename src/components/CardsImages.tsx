import Image from 'next/image';

const CardImages = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-100 rounded-lg shadow-md transition-all hover:scale-110 w-80 h-72">
        <Image
          className="rounded-lg"
          src="/images/gallery/bulldog.jpg"
          alt="Logo Saving Pets"
          width={320}
          height={270}
        />
      </div>
    </>
  );
};

export default CardImages;

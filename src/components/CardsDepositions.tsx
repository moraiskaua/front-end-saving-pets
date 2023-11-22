import Image from 'next/image';

interface CardProps {
  deposition: {
    photo: string;
    name: string;
    deposition: string;
    id: string;
  };
}

const CardsDepositions = ({ deposition }: CardProps) => {
  return (
    <div className="flex flex-col items-center min-h-[18rem] h-max rounded-3xl bg-white">
      <Image
        className="rounded-full border-8 border-yellow -mt-12 mb-2 object-cover"
        src={deposition.photo}
        alt={`foto de ${deposition.name}`}
        width={150}
        height={150}
      />
      <h2 className="text-xl text-brown font-bold uppercase tracking-wider border-b-2 border-yellow">
        {deposition.name}
      </h2>
      <blockquote className="px-8 py-3 text-center text-sm">
        {deposition.deposition}
      </blockquote>
    </div>
  );
};

export default CardsDepositions;

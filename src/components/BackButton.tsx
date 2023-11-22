import { useRouter } from 'next/router';
import { IoArrowBackSharp } from 'react-icons/io5';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-white text-xl p-3 bg-transparent border-2 border-white rounded-full flex items-center hover:text-black hover:bg-white transition-all absolute left-5 top-5"
    >
      <IoArrowBackSharp size={25} />
    </button>
  );
};

export default BackButton;

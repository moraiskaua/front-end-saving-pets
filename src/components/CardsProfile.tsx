import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
interface FotoCardProps {
  foto: string;
  nome: string;
  funcao: string;
}

const CardProfile = ({ foto, nome, funcao }: FotoCardProps) => {
  return (
    <>
      <div className="flex flex-col rounded-md w-60 h-72 bg-white shadow-lg">
        <div className="bg-bg-green rounded-t-md flex justify-center items-center mb-16">
          <Image
            className="rounded-full object-cover bg-bg-green p-1 -mb-12 h-32"
            src={foto}
            alt={nome}
            width={120}
            height={120}
          />
        </div>
        <h2 className="text-center text-xl font-medium">{nome}</h2>
        <h4 className="text-center text-lg font-thin mb-8">{funcao}</h4>
        <div className="flex justify-center gap-1">
          <InstagramIcon
            className=" text-black border-2 border-black p-1 w-9 h-9 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer hover:shadow-md
             hover:shadow-[#cc1251] hover:bg-[#cc1251] hover:text-white hover:border-transparent"
          />
          <WhatsAppIcon
            className=" text-black border-2 border-black p-1 w-9 h-9 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer hover:shadow-md
            hover:shadow-[#07db6a95] hover:bg-[#25d360] hover:text-white hover:border-transparent"
          />
          <GitHubIcon
            className=" text-black border-2 border-black p-1 w-9 h-9 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer hover:shadow-md
            hover:shadow-black hover:bg-[#212121] hover:text-white hover:border-transparent"
          />
          <EmailIcon
            className=" text-black border-2 border-black p-1 w-9 h-9 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer hover:shadow-md
            hover:shadow-[#9a1919] hover:bg-[#9a1919] hover:text-white hover:border-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default CardProfile;

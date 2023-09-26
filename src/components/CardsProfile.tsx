import Image from 'next/image';

interface FotoCardProps {
  foto: string;
  nome: string;
  funcao: string;
}

const CardProfile = ({ foto, nome, funcao }: FotoCardProps) => {
  return (
    <>
      <div className="flex flex-col rounded-md w-60 h-64 bg-bg-yellow shadow-lg">
        <div className="rounded-t-md">
          <Image className="rounded-t-md" src={foto} alt="foto" width={240} height={350} />
          {/* <div className=''>Redes Sociais</div> */}
        </div>
        <div className="text-center text-slate-900 bg-white h-1/2 rounded-b-md pt-4">
          <h2 className="text-lg font-medium">{nome}</h2>
          <h4>{funcao}</h4>
        </div>
      </div>
    </>
  );
};

export default CardProfile;

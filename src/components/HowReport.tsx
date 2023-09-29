import Image from 'next/image';

const HowReport = () => {
  return (
    <section className="bg-walllpaper-how-report bg-cover text-center flex flex-col justify-center items-center text-white">
      <h2 className="-m-4 text-4xl font-semibold">
        Como <span className="p-1 bg-brown text-yellow">Denunciar?</span>
      </h2>
      <div className="bg-footprints bg-contain bg-repeat-x p-1">
        <div className="flex justify-between items-center gap-8 w-full p-16">
          <div className="text-center flex flex-col justify-center items-center gap-2">
            <Image
              className="animate-bounce"
              src="/images/icons/1.svg"
              alt="Nº 1"
              width={45}
              height={45}
            />
            <p className="bg-brown p-2 rounded-full font-medium">
              Acesse a página Denúncias
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center gap-2">
            <Image
              className="animate-bounce"
              src="/images/icons/2.svg"
              alt="Nº 2"
              width={45}
              height={45}
            />
            <p className="bg-brown p-2 rounded-full font-medium">
              Preencha os espaços com o que se pede
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center gap-2">
            <Image
              className="animate-bounce"
              src="/images/icons/3.svg"
              alt="Nº 3"
              width={45}
              height={45}
            />
            <p className="bg-brown p-2 rounded-full font-medium">
              Clique no botão enviar para registrar sua denúncia
            </p>
          </div>
          <div className="text-center flex flex-col ju  stify-center items-center gap-2">
            <Image
              className="animate-bounce"
              src="/images/icons/4.svg"
              alt="Nº 4"
              width={45}
              height={45}
            />
            <p className="bg-brown p-2 rounded-full font-medium">
              Aguarde a equipe entrar em contato!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowReport;

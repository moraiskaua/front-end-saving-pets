import Image from 'next/image';

const HowReport = () => {
  return (
    <section className="bg-walllpaper-how-report bg-cover text-center flex flex-col justify-center items-center text-white">
      <h2 className="-m-4 text-4xl font-semibold">
        Como <span className="p-1 bg-brown text-yellow">Denunciar?</span>
      </h2>
      <div className="py-16 md:bg-footprints bg-contain bg-repeat-x md:p-1">
        <div className="flex flex-col gap-7 md:flex-row md:justify-between md:items-center md:gap-8 w-full md:p-16">
          <div className="text-center flex flex-col justify-center items-center gap-2">
            <Image
              className="animate-bounce"
              src="/images/icons/1.svg"
              alt="Nº 1"
              width={45}
              height={45}
            />
            <p className="bg-brown py-3 px-4 rounded-full font-medium text-sm">
              Clique no ícone de &quot;+&quot; localizado no canto inferior
              direito
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
            <p className="bg-brown py-3 px-4 rounded-full font-medium text-sm">
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
            <p className="bg-brown py-3 px-4 rounded-full font-medium text-sm">
              Clique no botão salvar para registrar sua denúncia
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center gap-2">
            <Image
              className="animate-bounce"
              src="/images/icons/4.svg"
              alt="Nº 4"
              width={45}
              height={45}
            />
            <p className="bg-brown py-3 px-4 rounded-full font-medium text-sm">
              Aguarde a equipe entrar em contato!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowReport;

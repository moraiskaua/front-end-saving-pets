import Image from 'next/image';
import MediaSocial from './MediaSocial';
import Button from './Button';
import Link from 'next/link';
// import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-red shadow-2xl flex-wrap">
      <section className="flex justify-around items-center   border-b border-b-gray-200 p-4">
        <div className="mb-3">
          <Image
            src="/logo-footer.svg"
            alt="Logo Saving Pets"
            width={120}
            height={84}
          />
        </div>
        <div className="flex justify-center items-center flex-wrap gap-10">
          <ul className=" flex flex-col column gap-3">
            <Link href="/about">
              <li className="cursor-pointer opacity-50 transition-all hover:text-black hover:opacity-100">
                Nossa História
              </li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer opacity-50 hover:text-black hover:opacity-100">
                Contato
              </li>
            </Link>
          </ul>
          <ul className=" flex flex-col column gap-3">
            <li className="cursor-pointer opacity-50 transition-all hover:text-black hover:opacity-100">
              Política de Privacidade
            </li>
            <li className="cursor-pointer opacity-50 transition-all hover:text-black hover:opacity-100">
              Depoimentos
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-12">
          <Link href="/contact">
            <Button text="Fale Conosco" />
          </Link>
          <MediaSocial />
        </div>
      </section>
      <p className="text-center p-2 opacity-50">
        &copy;Copyright 2023 - Todos os Direitos Reservados a Saving Pets
      </p>
    </footer>
  );
};

export default Footer;

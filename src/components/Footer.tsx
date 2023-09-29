import Image from 'next/image';
import MediaSocial from './MediaSocial';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-brown shadow-2xl flex-wrap text-white/75 p-5">
      <div className="flex justify-around items-center border-b border-b-white/75 p-3">
        <div className="mb-3">
          <Image
            src="/logo.svg"
            alt="Logo Saving Pets"
            width={240}
            height={120}
          />
        </div>
        <div className="flex justify-center items-center flex-wrap gap-10">
          <ul className=" flex flex-col column gap-3">
            <Link href="/about">
              <li className="cursor-pointer transition-colors hover:text-white">
                Nossa História
              </li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer transition-colors hover:text-white">
                Contato
              </li>
            </Link>
          </ul>

          <ul className=" flex flex-col column gap-3">
            <Link href="/privacyPolicy">
              <li className="cursor-pointer transition-colors hover:text-white">
                Política de Privacidade
              </li>
            </Link>
            <Link href="/depositions">
              <li className="cursor-pointer transition-colors hover:text-white">
                Depoimentos
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-12">
          <Button text="Fale Conosco" onClick={() => router.push('/contact')} />
          <MediaSocial />
        </div>
      </div>
      <p className="text-center pt-2.5">
        &copy;Copyright 2023 - Todos os Direitos Reservados a Saving Pets
      </p>
    </footer>
  );
};

export default Footer;

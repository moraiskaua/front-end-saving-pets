import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  return (
    <header
      className={`${
        isScrolled ? 'bg-[#1C130F] shadow-md' : 'bg-transparent'
      } flex justify-around p-3 fixed w-full z-10 transition-colors ease-out`}
    >
      <Link href="/">
        <Image src="/logo.svg" alt="Logo Saving Pets" width={120} height={84} />
      </Link>
      <ul className="flex items-center gap-6 font-bold text-sm">
        <Link href="/">
          <li
            className={
              'text-gray-300 hover:text-white transition-transform font-normal text-base hover:scale-110 font-hind-siliguri'
            }
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={
              'text-gray-300 hover:text-white transition-transform font-normal text-base hover:scale-110 font-hind-siliguri'
            }
          >
            Sobre Nós
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={
              'text-gray-300 hover:text-white transition-transform font-normal text-base hover:scale-110 font-hind-siliguri'
            }
          >
            Contato
          </li>
        </Link>
        <Link href="/gallery">
          <li
            className={
              'text-gray-300 hover:text-white transition-transform font-normal text-base hover:scale-110 font-hind-siliguri'
            }
          >
            Galeria
          </li>
        </Link>
        <Link href="/report">
          <li
            className={
              'text-gray-300 hover:text-white transition-transform font-normal text-base hover:scale-110 font-hind-siliguri'
            }
          >
            Denunciar
          </li>
        </Link>
        <Link href="/register">
          <li
            className={
              'text-gray-300 hover:text-white transition-transform font-normal text-base hover:scale-110 font-hind-siliguri'
            }
          >
            Cadastro
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;

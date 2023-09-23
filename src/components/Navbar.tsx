import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  return (
    <header
      className={`${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } flex justify-around p-3 fixed w-full z-10 transition-colors ease-out`}
    >
      <Link href="/">
        <Image src="/logo.svg" alt="Logo Saving Pets" width={120} height={84} />
      </Link>
      <ul className="flex items-center gap-4 font-bold text-sm">
        <Link href="/">
          <li
            className={`${
              isScrolled
                ? 'text-black hover:text-bg-green'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`${
              isScrolled
                ? 'text-black hover:text-bg-green'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Sobre Nós
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={`${
              isScrolled
                ? 'text-black hover:text-bg-green'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Contato
          </li>
        </Link>
        <Link href="/gallery">
          <li
            className={`${
              isScrolled
                ? 'text-black hover:text-bg-green'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Galeria
          </li>
        </Link>
        <Link href="/report">
          <li
            className={`${
              isScrolled
                ? 'text-black hover:text-bg-green'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Denunciar
          </li>
        </Link>
        <Link href="/register">
          <li
            className={`${
              isScrolled
                ? 'text-black hover:text-bg-green'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Cadastro
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;

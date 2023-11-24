import { AuthContext } from '@/contexts/AuthContext';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useRef, useState } from 'react';

interface MobileNavbarProps {
  isScrolled: boolean;
}

const MobileNavbar = ({ isScrolled }: MobileNavbarProps) => {
  const { isAuthenticated, signOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const handleClickOutside = (event: Event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header
      className={`${
        isScrolled ? 'bg-brown shadow-md' : 'bg-transparent'
      } md:hidden flex justify-between items-center p-4 fixed w-full z-10 transition-colors ease-out`}
    >
      <Link href="/">
        <Image src="/logo.svg" alt="Logo Saving Pets" width={85} height={60} />
      </Link>
      <Hamburger
        toggled={isMenuOpen}
        toggle={setIsMenuOpen}
        color="rgb(209 213 219)"
      />

      <nav
        className={`fixed top-0 right-0 bg-brown p-4 transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        ref={menuRef}
        style={{
          width: isMenuOpen ? '50vw' : '0',
          height: 'auto',
          overflow: 'hidden',
          padding: '20px',
          borderRadius: '8px',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Adiciona sombra
        }}
      >
        <ul className="flex flex-col space-y-4">
          <Link href="/">
            <li
              className={`link ${
                pathname === '/' ? 'text-yellow' : 'text-white'
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`link ${
                pathname === '/about' ? 'text-yellow' : 'text-white'
              }`}
            >
              Sobre Nós
            </li>
          </Link>
          <Link href="/gallery">
            <li
              className={`link ${
                pathname === '/gallery' ? 'text-yellow' : 'text-white'
              }`}
            >
              Galeria
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`link ${
                pathname === '/contact' ? 'text-yellow' : 'text-white'
              }`}
            >
              Contato
            </li>
          </Link>
          {isAuthenticated ? (
            <li className="cursor-pointer text-white" onClick={() => signOut()}>
              Sair
            </li>
          ) : (
            <Link href="/login">
              <li
                className={`link ${
                  pathname === '/register' ? 'text-yellow' : 'text-white'
                }`}
              >
                Entrar
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MobileNavbar;

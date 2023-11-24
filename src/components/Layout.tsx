import { useState, useEffect, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useMediaQuery } from '@mui/material';
import MobileNavbar from './MobileNavbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileNavbar isScrolled={isScrolled} />
      ) : (
        <Navbar isScrolled={isScrolled} />
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Verifique se o caminho atual é "/register"
  const isRegisterPage = router.pathname === '/register';

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Saving Pets</title>
      </Head>
      {!isRegisterPage && <Navbar isScrolled={isScrolled} />}
      <Component {...pageProps} />
      {!isRegisterPage && <Footer />}
    </>
  );
}

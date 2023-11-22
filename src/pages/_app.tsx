import Head from 'next/head';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import { register } from 'swiper/element-bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/swiper-bundle.css';
import '@/styles/globals.css';
import 'swiper/css/pagination';
import 'swiper/css';

register();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>Saving Pets</title>
      </Head>
      <ToastContainer autoClose={2500} />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

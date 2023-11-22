import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

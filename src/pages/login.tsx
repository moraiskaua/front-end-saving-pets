import BackButton from '@/components/BackButton';
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import { AuthContext } from '@/contexts/AuthContext';
import { canSSRGuest } from '@/utils/canSSRGuest';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '@/components/Loading';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, isLoading } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) return toast.error('Preencha todos os campos!');

    await signIn({
      email,
      password,
    });
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-bottom bg-no-repeat shadow-xl bg-yellow">
      <BackButton />
      <div className="flex justify-around items-center gap-4 bg-white shadow-lg p-4 rounded-lg md:w-3/5">
        <div className="hidden lg:block">
          <Image
            src="/images/image1-forms-login.png"
            alt=""
            width={400}
            height={500}
          />
        </div>
        <div className="w-full lg:border-l-2 md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="py-12 px-7 md:px-0 lg:px-8 rounded-md flex flex-col gap-4 justify-center w-full"
          >
            <h1 className="text-2xl mb-8 text-center font-bold">Login</h1>
            <FormInput
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              maxLength={100}
            />
            <FormInput
              placeholder="Senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onPaste={e => e.preventDefault()}
              maxLength={30}
            />
            <FormButton>{isLoading ? <Loading /> : 'Entrar'}</FormButton>
            <p className="text-center text-sm">
              Ainda não possui uma conta?{' '}
              <Link
                href="/register"
                className="text-yellow italic hover:underline"
              >
                Criar uma
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = canSSRGuest(async () => {
  return {
    props: {},
  };
});

export default Login;

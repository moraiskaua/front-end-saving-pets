import BackButton from '@/components/BackButton';
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import { AuthContext } from '@/contexts/AuthContext';
import { canSSRGuest } from '@/utils/canSSRGuest';
import { formatCPF, formatPhone } from '@/utils/formaters';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useContext, useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const { signUp } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!privacyPolicy) {
      return alert('Você precisa aceitar a Política de Privacidade!');
    }

    if (!name || !email || !password || !cpf || !phone) {
      return alert('Preencha todos os campos!');
    }

    await signUp({ name, email, password, cpf, phone });
  };

  return (
    <>
      <section className="min-h-screen flex justify-center items-center bg-bottom bg-no-repeat shadow-xl bg-report-forms bg-yellow">
        <BackButton />
        <form
          onSubmit={handleSubmit}
          className="bg-white lg:w-[42%] rounded-2xl overflow-hidden"
        >
          <div className="bg-brown p-5 flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="Logo Saving Pets"
              width={120}
              height={84}
            />
          </div>
          <div className="shadow-lg py-7 px-12 rounded-md flex flex-col gap-3.5 justify-center items-center">
            <h1 className="text-2xl mb-1.5 text-center font-bold">
              Nova conta
            </h1>
            <FormInput
              placeholder="Nome"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <FormInput
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <FormInput
              placeholder="Senha"
              type="password"
              value={password}
              onChange={e => setPassowrd(e.target.value)}
              required
            />
            <div className="flex justify-center gap-3 w-full">
              <FormInput
                placeholder="Cpf"
                type="text"
                value={cpf}
                onChange={e => setCpf(formatCPF(e.target.value))}
                maxLength={14}
                required
              />
              <FormInput
                placeholder="Celular"
                type="tel"
                value={phone}
                onChange={e => setPhone(formatPhone(e.target.value))}
                maxLength={15}
                required
              />
            </div>
            <div className="w-full flex gap-2 items-center">
              <input
                type="checkbox"
                checked={privacyPolicy}
                onChange={e => setPrivacyPolicy(e.target.checked)}
                id="policy-checkbox"
              />
              <label
                className="text-xs relative cursor-pointer"
                htmlFor="policy-checkbox"
              >
                Li e Concordo com a{' '}
                <Link
                  href="/privacyPolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-yellow hover:underline"
                >
                  Política de Privacidade
                </Link>
              </label>
            </div>
            <FormButton>Cadastrar</FormButton>
            <p className="text-sm">
              Já possui uma conta?{' '}
              <Link
                href="/login"
                className="text-yellow italic hover:underline"
              >
                Entrar
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export const getServerSideProps = canSSRGuest(async ctx => {
  return {
    props: {},
  };
});

export default Register;

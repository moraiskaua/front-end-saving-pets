import { FormEvent, useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import Loading from '@/components/Loading';
import { canSSRGuest } from '@/utils/canSSRGuest';
import { formatCPF, formatPhone } from '@/utils/formaters';
import { AuthContext } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';
import {
  isValidCPF,
  isValidMobilePhone,
} from '@brazilian-utils/brazilian-utils';
import CustomCheckbox from '@/components/CustomCheckbox';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const { signUp, isLoading } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!privacyPolicy) {
      return toast.warn('Você precisa aceitar a Política de Privacidade!');
    }

    if (!name || !email || !password || !cpf || !phone) {
      return toast.warn('Preencha todos os campos!');
    }

    if (password.length >= 8) {
      toast.warn('Sua senha deve conter pelo menos 8 caracteres');
    }

    if (!isValidCPF(cpf)) {
      return toast.error('Digite um CPF válido!');
    }

    if (!isValidMobilePhone(phone)) {
      return toast.error('Digite um número válido!');
    }

    await signUp({ name, email, password, cpf, phone });
  };

  const togglePrivacyPolice = () => {
    setPrivacyPolicy(!privacyPolicy);
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-bottom bg-no-repeat shadow-xl bg-report-forms bg-yellow">
      <BackButton />
      <form
        onSubmit={handleSubmit}
        className="bg-white lg:w-[42%] rounded-2xl overflow-hidden"
      >
        <div className="bg-brown p-5 flex justify-center items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo Saving Pets"
              width={120}
              height={84}
            />
          </Link>
        </div>
        <div className="shadow-lg py-7 px-12 rounded-md flex flex-col gap-3.5 justify-center items-center">
          <h1 className="text-2xl mb-1.5 text-center font-bold">Nova conta</h1>
          <FormInput
            placeholder="Nome"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            maxLength={100}
          />
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
          <div className="flex justify-center gap-3 w-full">
            <FormInput
              placeholder="Cpf"
              type="text"
              value={cpf}
              onChange={e => setCpf(formatCPF(e.target.value))}
              onPaste={e => e.preventDefault()}
              maxLength={14}
            />
            <FormInput
              placeholder="Celular"
              type="tel"
              value={phone}
              onChange={e => setPhone(formatPhone(e.target.value))}
              onPaste={e => e.preventDefault()}
              maxLength={15}
            />
          </div>
          <div className="w-full flex gap-2 items-center">
            <CustomCheckbox
              id="policy-checkbox"
              checked={privacyPolicy}
              onChange={togglePrivacyPolice}
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
          <FormButton>{isLoading ? <Loading /> : 'Cadastrar'}</FormButton>
          <p className="text-sm">
            Já possui uma conta?{' '}
            <Link href="/login" className="text-yellow italic hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export const getServerSideProps = canSSRGuest(async () => {
  return {
    props: {},
  };
});

export default Register;

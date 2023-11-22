import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import { AuthContext } from '@/contexts/AuthContext';
import { canSSRGuest } from '@/utils/canSSRGuest';
import { formatCPF, formatPhone } from '@/utils/formaters';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const router = useRouter();
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
        <button
          onClick={() => router.back()}
          className="text-white text-xl py-1 px-2 bg-transparent border-2 border-white rounded-md shadow-lg flex items-center hover:text-black hover:bg-white transition-all absolute left-5 top-5"
        >
          <IoArrowBackSharp />
        </button>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg py-12 px-8 rounded-md flex flex-col gap-4 lg:w-4/12 md:w-2/3 sm:w-1/2 justify-center"
        >
          <h1 className="text-2xl mb-8 text-center">Cadastro</h1>
          <FormInput
            placeholder="Digite o seu nome"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <FormInput
            placeholder="Digite o seu e-mail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <FormInput
            placeholder="Digite a sua senha"
            type="password"
            value={password}
            onChange={e => setPassowrd(e.target.value)}
            required
          />
          <FormInput
            placeholder="Digite o seu cpf"
            type="text"
            value={cpf}
            onChange={e => setCpf(formatCPF(e.target.value))}
            maxLength={14}
            required
          />
          <FormInput
            placeholder="Digite o seu número de celular"
            type="tel"
            value={phone}
            onChange={e => setPhone(formatPhone(e.target.value))}
            maxLength={15}
            required
          />

          <div className="flex gap-2 mb-2 items-center">
            <input
              type="checkbox"
              checked={privacyPolicy}
              onChange={e => setPrivacyPolicy(e.target.checked)}
              id="policy-checkbox"
            />
            <div className="checkbox-custom"></div>
            <label
              className="text-sm relative cursor-pointer"
              htmlFor="policy-checkbox"
            >
              Li e Concordo com a{' '}
              <Link
                href="/privacyPolicy"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-all hover:text-yellow"
              >
                <strong> Política de Privacidade</strong>
              </Link>
            </label>
          </div>
          <FormButton>Cadastrar</FormButton>
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

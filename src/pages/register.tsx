import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoArrowBackSharp } from 'react-icons/io5';

const Register = () => {
  const router = useRouter();

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
          action=""
          className="bg-white shadow-lg py-12 px-8 rounded-md flex flex-col gap-4 lg:w-4/12 md:w-2/3 sm:w-1/2 justify-center"
        >
          <h1 className="text-2xl mb-8 text-center">Cadastro</h1>
          <FormInput placeholder="Informe o seu Nome Completo" required />
          <FormInput placeholder="Informe o seu Email" required />
          <FormInput placeholder="Informe o seu Telefone de Contato" required />
          <FormInput placeholder="Informe o seu CPF" required />

          <div className="flex gap-2 mb-2">
            <input type="checkbox" className="" />
            <p className="text-sm">
              Li e Concordo com a
              <Link
                href="/privacyPolicy"
                target="_blank"
                className="cursor-pointer transition-all hover:text-yellow"
              >
                <strong> Política de Privacidade</strong>
              </Link>
            </p>
          </div>
          <FormButton>Cadastrar</FormButton>
        </form>
      </section>
    </>
  );
};

export default Register;

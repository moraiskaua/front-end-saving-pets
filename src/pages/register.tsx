import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import Link from 'next/link';

const Register = () => {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center bg-bottom bg-no-repeat shadow-xl bg-register-forms bg-bg-yellow">
        <form
          action=""
          className="bg-white shadow-lg py-12 px-8 rounded-md flex flex-col gap-4 w-4/12 justify-center"
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
                className="cursor-pointer transition-all hover:text-bg-yellow"
              >
                <strong> Política de Privacidade</strong>
              </Link>
            </p>
          </div>
          <FormButton text="Cadastrar" />
        </form>
      </section>
    </>
  );
};

export default Register;

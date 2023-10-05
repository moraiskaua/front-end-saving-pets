import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoArrowBackSharp } from 'react-icons/io5';


const Login = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex justify-center items-center bg-bottom bg-no-repeat shadow-xl bg-yellow">
      <button
        onClick={() => router.back()}
        className="text-white text-xl py-1 px-2 bg-transparent border-2 border-white rounded-md shadow-lg flex items-center hover:text-black hover:bg-white transition-all absolute left-5 top-5"
      >
        <IoArrowBackSharp />
      </button>
      <section className="flex justify-around items-center gap-4 bg-white shadow-lg p-4 rounded-lg w-3/5">
        <div className='hidden lg:block'>
          <Image src="/images/image1-forms-login.png" alt="" width={400} height={500} />
        </div>
        <div className='lg:border-l-2 lg:w-1/2 md:w-full sm:w-full'>
          <form
            action=""
            className="py-12 px-8 rounded-md flex flex-col gap-4 l justify-center"
          >
            <h1 className="text-2xl mb-8 text-center">Login</h1>
            <FormInput placeholder="Informe o seu CPF" required />
            <FormInput placeholder="Informe a sua senha" required />

            <div className="flex gap-2 mb-2">
              <input type="checkbox" className="" />
              <p className="text-sm">Me manter conectado</p>
            </div>
            <FormButton text="Entrar" />
          </form>
        </div>
      </section>
    </section>
  );
};

export default Login;

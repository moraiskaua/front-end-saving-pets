import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import FormInput from '@/components/FormInput';
import FormTextBox from '@/components/FormTextBox';

const Contact = () => {
  return (
    <>
      <Banner
        text="Entre em contato com a equipe do saving-pets"
        title="Contato"
      />
      <section className="min-h-screen bg-contact-forms flex items-center justify-center lg:flex lg:justify-start lg:pl-52 ">
        <form className="bg-white shadow-lg pt-12 pb-12 pr-8 pl-8 w-96 rounded-md flex flex-col gap-4">
          <h1 className="text-2xl mb-8 text-center">Formulário de contato</h1>
          <FormInput placeholder="Digite seu nome" required />
          <FormInput placeholder="Informe um telefone " required />
          <FormTextBox placeholder="Diga o motivo do contato" />

          <button className="bg-amber-400 pt-1 pb-1 mt-6 rounded-md font-medium transition-all hover:-translate-y-1 hover:bg-[#FEAE11] cursor-pointer">
            Enviar
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

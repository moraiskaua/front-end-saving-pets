import Banner from '@/components/Banner';
import FormButton from '@/components/FormButton';
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
        <form className="bg-white shadow-lg pt-12 pb-12 pr-8 pl-8 w-4/12 rounded-md flex flex-col gap-4">
          <h1 className="text-2xl mb-8 text-center">Formulário de contato</h1>
          <FormInput placeholder="Digite seu nome" required />
          <FormInput placeholder="Informe seu telefone " required />
          <FormTextBox placeholder="Nos diga o motivo do contato" />

          <FormButton text='Enviar'/>
        </form>
      </section>
    </>
  );
};

export default Contact;

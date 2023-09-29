import Banner from '@/components/Banner';
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import FormTextBox from '@/components/FormTextBox';

const Contact = () => {
  return (
    <>
      <Banner
        text="Entre em contato com a equipe do saving-pets"
        pre_title="Cont"
        pos_title="ato"
        isSingleWord
      />
      <section className="min-h-screen bg-contact-forms flex items-center justify-start bg-yellow bg-no-repeat bg-right-bottom">
        <form className="bg-white shadow-lg py-12 px-8 w-4/12 ml-32 rounded-md flex flex-col gap-4">
          <h1 className="text-2xl mb-8 text-center">Formulário de contato</h1>
          <FormInput placeholder="Digite seu nome" required />
          <FormInput placeholder="Informe seu telefone " required />
          <FormTextBox placeholder="Nos diga o motivo do contato" />

          <FormButton text="Enviar" />
        </form>
      </section>
    </>
  );
};

export default Contact;

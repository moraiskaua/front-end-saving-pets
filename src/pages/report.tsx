import Banner from '@/components/Banner';
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import FormTextBox from '@/components/FormTextBox';

const Report = () => {

  
  return (
    <>
      <Banner
        text="Nunca deixe para amanhã o Pet que você pode salvar hoje!"
        pre_title="Denu"
        pos_title="ncie"
        isSingleWord
      />
      <section className="min-h-screen bg-yellow bg-cover bg-report-forms flex justify-center items-center bg-bottom bg-no-repeat shadow-xl">
        <form className="bg-white shadow-lg py-12 px-8 rounded-md flex flex-col gap-4 w-5/12">
          <h1 className="text-2xl mb-8 text-center">Formulário de Denúncia</h1>
          <FormInput placeholder="Informe seu nome" required />
          <FormInput placeholder="Informe seu telefone " required />
          <FormInput placeholder="Informe seu CPF " required />
          <FormTextBox placeholder="Descreva o pet" required />
          <FormTextBox placeholder="Informe a Localização" required />
          <FormButton text="Enviar" />
        </form>
      </section>
    </>
  );
};

export default Report;

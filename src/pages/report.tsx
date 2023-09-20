import Banner from '@/components/Banner';
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import FormTextBox from '@/components/FormTextBox';

const Report = () => {
  return (
    <>
      <Banner
        text="Nunca deixe para amanhã o Pet que você pode salvar hoje!"
        title="Denuncie"
      />
      <section className="min-h-screen bg-[#FEAE11] bg-report-forms flex justify-center items-center">
        <form className="bg-white shadow-lg pt-12 pb-12 pr-8 pl-8 rounded-md flex flex-col gap-4 w-5/12">
          <h1 className="text-2xl mb-8 text-center">Formulário de Denúncia</h1>
          <FormInput placeholder="Informe seu nome" required />
          <FormInput placeholder="Informe seu telefone " required />
          <FormInput placeholder="Informe seu CPF " required />
          <FormTextBox placeholder="Descreva o pet" required />
          <FormButton text='Enviar'/>
        </form>
      </section>
    </>
  );
};

export default Report;

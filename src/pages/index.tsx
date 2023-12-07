import Button from '@/components/Button';
import Banner from '@/components/Banner';
import { useRouter } from 'next/router';
import HowReport from '@/components/HowReport';
import Layout from '@/components/Layout';

const Home = () => {
  const router = useRouter();

  return (
    <Layout>
      <Banner
        text={`"Ter um animal em sua vida não faz de você uma pessoa melhor, mas
        sim cuidar dele e respeitá-lo como merece!"`}
        pre_title="Saving"
        pos_title="Pets"
      />
      <section
        className="min-h-screen bg-wallpaper-about-us bg-cover bg-center text-center flex flex-col justify-center items-center text-white font-hind-siliguri"
        id="about-us"
      >
        <div className="w-2/3 md:w-1/2">
          <h2 className="font-medium text-4xl mb-8">Sobre Nós</h2>
          <p className="mb-8 font-light">
            Você certamente já viu um pet andando pela rua sozinho ou em alguma
            residência em péssimas condições e não pode acolhê-lo e levá-lo para
            sua casa, não é?
          </p>
          <p className="mb-8 font-light">
            Diante disso, nossa corporação foi criado para ajudarmos esses seres
            vivos a terem condições melhores em suas vidas. Temos um sistema de
            <strong className="font-bold"> DENÚNCIAS </strong> no qual você pode
            fazer uma descrição do local e do que sabe a respeito, assim
            facilitando o resgate e até a rapidez do atendimento em caso de
            urgência.
          </p>
          <h2 className="text-1xl font-semibold mb-8">
            Não deixe pra amanhã o pet que você pode salvar hoje!
          </h2>
          <Button text="Saiba Mais" onClick={() => router.push('/about')} />
        </div>
      </section>
      <HowReport />
    </Layout>
  );
};

export default Home;

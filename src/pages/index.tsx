import { useEffect, useState } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

import Image from 'next/image';
import Banner from '@/components/Banner';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <Banner
        text='"Ter um animal em sua vida não faz de você uma pessoa melhor, mas
        sim cuidar dele e respeitá-lo como merece"'
        title="Saving Pets"
      />
      <section
        className="bg-bg-yellow p-20 text-center flex flex-col justify-center items-center"
        id="about-us"
      >
        <div className="w-1/2">
          <h2 className="font-medium text-3xl font-merri-sans text-[#343A40] mb-8">
            Sobre Nós
          </h2>
          <p className="mb-8 text-justify">
            Você certamente já viu um pet andando pela rua sozinho ou em alguma
            residência em péssimas condições e não pode acolhê-lo e levá-lo para
            sua casa, não é?
          </p>
          <p className="mb-8 text-justify">
            Diante disso, nossa corporação foi criado para ajudarmos esses seres
            vivos a terem condições melhores em suas vidas. Temos um sistema de
            <strong className="text-[#343A40]"> DENÚNCIAS </strong> no qual você
            pode fazer uma descrição do local e do que sabe a respeito, assim
            facilitando o resgate e até a rapidez do atendimento em caso de
            urgência.
          </p>
          <h2 className="text-[#343A40] text-2xl font-medium mb-8">
            Não deixe pra amanhã o pet que você pode salvar hoje!
          </h2>
          <Button text="Saiba Mais" />
        </div>
      </section>
      <section className="bg-white p-20 text-center flex flex-col justify-center items-center">
        <h2 className="font-medium text-3xl font-merri-sans text-[#343A40] mb-8">
          Como Denunciar
        </h2>
      </section>
      <Footer />
    </>
  );
};

export default Home;

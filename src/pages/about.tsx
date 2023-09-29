import Banner from '@/components/Banner';
import CardProfile from '@/components/CardsProfile';

const About = () => {
  return (
    <>
      <Banner text="Conheça um pouco da nossa história!" title="Sobre Nós" />
      <section className="min-h-screen">
        <div className="flex flex-col gap-4 p-8">
          <h1 className="text center text-lg font-medium mb-4">
            Bem vindo aos Saving Pets
          </h1>
          <p>
            Somos apaixonados por animais e comprometidos com a missão de tornar
            o mundo um lugar mais seguro e amoroso para todos os seres vivos de
            quatro patas. O Saving Pets nasceu da convicção de que todos os pets
            merecem amor, respeito e cuidado, e é nosso objetivo transformar
            essa visão em realidade.
          </p>
          <p>
            Nossa história começou com um grupo de amantes de animais que,
            profundamente tocados pelas histórias de sofrimento e abuso que
            tantos pets enfrentam, decidiram tomar uma posição. Nosso
            compromisso é lutar contra o abuso, a negligência e a crueldade em
            todas as suas formas, e para isso, contamos com a sua ajuda.
          </p>
          <p>
            O Saving Pets é mais do que apenas um site; é um espaço seguro e
            inclusivo para todos aqueles que desejam fazer a diferença na vida
            dos pets. Acreditamos que a mudança começa com a conscientização e a
            ação, e é por isso que oferecemos recursos valiosos para denúncias
            de maus-tratos. Nosso objetivo é facilitar o processo de reportar
            abusos, conectando aqueles que testemunham ou têm conhecimento de
            maus-tratos a pets com as autoridades apropriadas e organizações de
            resgate.
          </p>
          <p>
            Nossa plataforma é baseada em princípios de empatia, compaixão e
            justiça. Através da colaboração com organizações parceiras, educamos
            a comunidade sobre a importância do bem-estar animal, fornecemos
            informações úteis sobre como reconhecer e relatar maus-tratos e,
            mais importante, oferecemos esperança aos animais que precisam de
            uma voz.
          </p>
          <p>
            Obrigado por visitar o Saving Pets e por ser parte da mudança.
            Juntos, podemos salvar vidas e criar um mundo onde todos os pets
            sejam amados, protegidos e respeitados.
          </p>
          <h3 className="font-semibold">
            Com amor pelos animais,
            <br />A equipe do Saving Pets
          </h3>
        </div>
        <div className="bg-bg-yellow min-h-screen p-8 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-center text-3xl text-white font-semibold mb-12 border-b-4 border-white py-2">
            Colaboradores
          </h1>
          <div className="flex flex-wrap justify-around gap-2">
            <CardProfile
              photo="/images/foto_davi.jpg"
              name="Davi Salomão"
              role="UI-UX"
              github=""
              email="mailto:davi.salomao@sempreceub.com"
            />
            <CardProfile
              photo="/images/foto_douglas.jpg"
              name="Douglas Santos"
              role="Front-End Developer"
              github="https://github.com/D0uglasSantos"
              email="mailto:douglas.santos@sempreceub.com"
            />
            <CardProfile
              photo="/images/foto_kaua.jpg"
              name="Kauã Morais"
              role="Back-End Developer"
              github="https://github.com/moraiskaua"
              email="mailto:moraiskaua@sempreceub.com"
            />
            <CardProfile
              photo="/images/foto_guilherme.jpg"
              name="Guilherme Marques"
              role="Data Base Manager"
              github=""
              email="mailto:guilherme.marques@sempreceub.com"
            />
            <CardProfile
              photo="/images/foto_larissa.jpg"
              name="Larissa Alves"
              role="Data Base Manager"
              github="https://github.com/larissanevss03"
              email="mailto:larissa.gneves@sempreceub.com"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

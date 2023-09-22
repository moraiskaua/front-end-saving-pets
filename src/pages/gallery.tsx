import Banner from '@/components/Banner';
import CardImages from '@/components/CardsImages';

const Gallery = () => {
  return (
    <>
      <Banner
        text="Veja um pouco da nossa histórias e momentos na nossa galeria"
        title="Galeria"
      />
      <section className="min-h-screen flex flex-wrap gap-8 justify-center pt-10 p-11 bg-bg-yellow">
        <CardImages image="/images/gallery/bulldog.jpg" />
        <CardImages image="/images/gallery/cao-e-mao.jpg" />
        <CardImages image="/images/gallery/cao-e-dono.jpg" />
        <CardImages image="/images/gallery/gatos.jpg" />
        <CardImages image="/images/gallery/cao-na-chuva.jpg" />
        <CardImages image="/images/gallery/cao-e-gato.jpg" />
      </section>
    </>
  );
};

export default Gallery;

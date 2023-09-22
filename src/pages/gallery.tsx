import Banner from '@/components/Banner';
import CardImages from '@/components/CardsImages';

const Gallery = () => {
  return (
    <>
      <Banner
        text="Veja um pouco da nossa histórias e momentos na nossa galeria"
        title="Galeria"
      />
      <section className="min-h-screen flex gap-12 pt-10 p-11 bg-bg-yellow">
        <CardImages />
      </section>
    </>
  );
};

export default Gallery;

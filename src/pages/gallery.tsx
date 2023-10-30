import Banner from '@/components/Banner';
import CardImages from '@/components/CardsImages';
import Layout from '@/components/Layout';

const Gallery = () => {
  return (
    <Layout>
      <Banner
        text="Veja um pouco da nossa histórias e momentos na nossa galeria"
        pre_title="Gal"
        pos_title="eria"
        isSingleWord
      />
      <section className="min-h-screen flex flex-wrap gap-8 justify-center pt-10 p-11 bg-wallpaper-about-us bg-cover bg-center">
        <CardImages image="/images/gallery/bulldog.jpg" />
        <CardImages image="/images/gallery/cao-e-mao.jpg" />
        <CardImages image="/images/gallery/cao-e-dono.jpg" />
        <CardImages image="/images/gallery/gatos.jpg" />
        <CardImages image="/images/gallery/cao-na-chuva.jpg" />
        <CardImages image="/images/gallery/cao-e-gato.jpg" />
      </section>
    </Layout>
  );
};

export default Gallery;

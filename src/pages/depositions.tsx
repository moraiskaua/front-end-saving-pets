import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from '@/components/Banner';
import CardsDepositions from '@/components/CardsDepositions';
import depositions from '../components/json/depositions.json';
import Layout from '@/components/Layout';
import { useMediaQuery } from '@mui/material';

const Depositions = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Layout>
      <Banner
        isSingleWord
        pre_title="Depoi"
        pos_title="mentos"
        text="Confira os depoimentos de pessoas que recorreram a nós!"
      />
      <section className="min-h-screen bg-brown flex items-center bg-wallpaper-about-us bg-cover bg-center">
        <Swiper
          pagination={{ clickable: true }}
          slidesPerView={isMobile ? 1 : 2}
          spaceBetween={15}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          loop
        >
          {depositions.map(deposition => (
            <SwiperSlide
              className="flex items-center justify-center py-16 px-10 md:px-5"
              key={deposition.id}
            >
              <CardsDepositions deposition={deposition} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Layout>
  );
};

export default Depositions;

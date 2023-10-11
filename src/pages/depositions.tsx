import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Banner from '@/components/Banner';
import CardsDepositions from '@/components/CardsDepositions';
import depositions from '../components/json/depositions.json';

const Depositions = () => {
  return (
    <>
      <Banner
        isSingleWord
        pre_title="Depoi"
        pos_title="mentos"
        text="Confira os depoimentos de pessoas que recorreram a nós!"
      />
      <section className="min-h-screen py-8 px-12 bg-brown flex items-center">
        <Swiper
          spaceBetween={2}
          slidesPerView={2}
          pagination={{ clickable: true }}
          loop={true}
          navigation
          className="bg-footprints"
        >
          {depositions.map(deposition => (
            <SwiperSlide
              className="flex items-center justify-center p-20"
              key={deposition.id}
            >
              <CardsDepositions deposition={deposition} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Depositions;

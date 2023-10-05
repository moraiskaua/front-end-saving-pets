import Banner from '@/components/Banner';
import CardsDepositions from '@/components/CardsDepositions';
import depositions from '../components/json/depositions.json';

const Depositions = () => {
  return (
    <>
      <Banner
        pre_title="Depoi"
        pos_title="mentos"
        isSingleWord
        text="Confira os depoimentos de pessoas que recorreram a nós!"
      />
      <section className="min-h-screen py-8 px-12 bg-brown flex items-center">
        <div className="p-8 flex flex-wrap gap-4 justify-center">
          {depositions.map((deposition) => (
            <CardsDepositions key={deposition.id} deposition={deposition} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Depositions;

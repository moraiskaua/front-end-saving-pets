import Image from 'next/image';
// import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-red py-10 shadow-xl flex justify-evenly flex-wrap">
      <div className="mb-3 ">
        <Image
          src="/logo-footer.svg"
          alt="Logo Saving Pets"
          width={120}
          height={84}
        />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 border-b border-b-gray-200 no-underline">
        <ul className=" flex flex-col column gap-3">
          <li>Nossa História</li>
          <li>Contato</li>
        </ul>
        <ul className=" flex flex-col column gap-3">
          <li>Política de Privacidade</li>
          <li>Depoimentos</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

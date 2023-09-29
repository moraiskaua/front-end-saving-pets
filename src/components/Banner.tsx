interface BannerProps {
  isSingleWord?: boolean;
  pre_title: string;
  pos_title: string;
  text: string;
}

const Banner = ({ pre_title, pos_title, text, isSingleWord }: BannerProps) => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center gap-12
        bg-cover bg-center bg-wallpaper"
      id="banner"
    >
      <div
        className={`${
          isSingleWord ? '' : 'gap-x-2.5'
        } flex justify-center items-center py-7 border-y-4 text-7xl border-white text-white font-bold uppercase`}
      >
        <p className="z-[1]">{pre_title}</p>
        <h1
          className={`${
            isSingleWord ? '-ml-2.5' : ''
          } p-1 bg-brown text-yellow`}
        >
          {pos_title}
        </h1>
      </div>
      <p className="font-hind-siliguri font-light text-lg text-white text-center w-1/3">
        {text}
      </p>
    </section>
  );
};

export default Banner;

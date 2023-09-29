interface BannerProps {
  pre_title: string;
  pos_title: string;
  text: string;
}

const Banner = ({ pre_title, pos_title, text }: BannerProps) => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center gap-12
        bg-cover bg-center bg-wallpaper"
      id="banner"
    >
      <div className="flex gap-x-3.5 py-7 border-y-4 text-7xl border-white text-white font-bold uppercase">
        <p className="">{pre_title}</p>
        <h1 className="p-1 bg-brown text-yellow">{pos_title}</h1>
      </div>
      <p className="font-hind-siliguri font-light text-lg text-white text-center w-1/3">
        {text}
      </p>
    </section>
  );
};

export default Banner;

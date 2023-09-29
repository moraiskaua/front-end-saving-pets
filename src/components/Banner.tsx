interface BannerProps {
  title: string;
  text: string;
}

const Banner = ({ title, text }: BannerProps) => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center gap-12
        bg-cover bg-center bg-wallpaper"
      id="banner"
    >
      <h1 className="mb-5 font-medium font-merri-sans text-5xl text-white border-b-4 border-[#FEAE11] pb-4">
        {title}
      </h1>
      <p className="font-merri-sans font-normal text-white text-center w-1/3">
        {text}
      </p>
    </section>
  );
};

export default Banner;

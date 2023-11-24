import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        bg-contain bg-center bg-no-repeat bg-wallpaper bg-[#9D8B81] relative"
      id="banner"
    >
      <div
        className={`${
          isSingleWord ? '' : 'gap-x-2.5'
        } flex justify-center items-center py-7 border-y-4 text-4xl md:text-7xl border-white text-white font-bold uppercase`}
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
      <p className="font-hind-siliguri font-light text-base md:text-lg text-white text-center w-2/3 md:w-1/3">
        {text}
      </p>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: '85px' }}
      >
        <ExpandMoreIcon style={{ fontSize: 80, color: 'white' }} />
      </motion.div>
    </section>
  );
};

export default Banner;

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MediaSocial = () => {
  return (
    <div className="md:p-4">
      <h2 className="mb-4 text-center text-lg font-medium uppercase">
        Siga-nos
      </h2>
      <div className="flex justify-center md:gap-4">
        <div className="text-white/75 md:p-4 w-12 h-12 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer">
          <FacebookIcon />
        </div>
        <div className="text-white/75 md:p-4 w-12 h-12 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer">
          <InstagramIcon />
        </div>
        <div className="text-white/75 md:p-4 w-12 h-12 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer">
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
};

export default MediaSocial;

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MediaSocial = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-center text-lg font-medium uppercase">Siga-nos</h2>
      <div className='flex justify-center gap-4'>
        <div
          className="bg-[#07254d] text-white p-4 w-11 h-11 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer hover:shadow-md
        hover:shadow-[#127aea95]"
        >
          <FacebookIcon />
        </div>
        <div
          className="bg-[#cc1251] text-white p-4 w-11 h-11 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer hover:shadow-md
        hover:shadow-[#cc1251]"
        >
          <InstagramIcon />
        </div>
        <div
          className="bg-[#25d360] text-white p-4 w-11 h-11 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer hover:shadow-md
        hover:shadow-[#07db6a95]"
        >
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
};

export default MediaSocial;

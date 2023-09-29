import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

interface PhotoCardProps {
  photo: string;
  name: string;
  role: string;
  github: string;
  email: string;
}

const CardProfile = ({ photo, name, role, github, email }: PhotoCardProps) => {
  return (
    <div className="flex flex-col rounded-md w-60 h-72 bg-brown shadow-lg">
      <div className="bg-yellow pt-2 rounded-t-md flex justify-center items-center mb-16">
        <Image
          className="rounded-full object-cover bg-yellow p-1 -mb-12 h-32"
          src={photo}
          alt={name}
          width={120}
          height={120}
        />
      </div>
      <h2 className="text-center text-xl font-medium">{name}</h2>
      <h4 className="text-center text-lg font-thin mb-8 text-yellow">{role}</h4>
      <div className="flex justify-center gap-1">
        <Link href={github} target="_blank">
          <GitHubIcon className=" text-white/75 border-2 border-white/75 p-1 w-9 h-9 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer hover:shadow-md" />
        </Link>
        <Link href={email} target="_blank">
          <EmailIcon className=" text-white/75 border-2 border-white/75 p-1 w-9 h-9 flex justify-center items-center rounded-full transition-transform hover:-translate-y-1 cursor-pointer hover:shadow-md" />
        </Link>
      </div>
    </div>
  );
};

export default CardProfile;

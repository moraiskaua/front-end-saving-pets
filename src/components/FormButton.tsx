import { ReactNode } from 'react';

interface FormsButtonProps {
  children: ReactNode;
}

const FormButton = ({ children }: FormsButtonProps) => {
  return (
    <button
      type="submit"
      className="bg-amber-400 py-3 px-5 mt-5 w-full rounded-md font-medium cursor-pointer hover:bg-amber-500/90 transition transition-colors-duration-300 flex justify-center items-center "
    >
      {children}
    </button>
  );
};

export default FormButton;

import { ReactNode } from 'react';

interface FormsButtonProps {
  children: ReactNode;
}

const FormButton = ({ children }: FormsButtonProps) => {
  return (
    <button
      type="submit"
      className="bg-amber-400 py-1.5 mt-6 rounded-md font-medium transition-all hover:-translate-y-1 hover:bg-[#FEAE11] cursor-pointer"
    >
      {children}
    </button>
  );
};

export default FormButton;

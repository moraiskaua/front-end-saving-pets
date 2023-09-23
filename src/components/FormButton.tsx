interface FormsButtonProps {
  text: string;
}

const FormButton = ({ text }: FormsButtonProps) => {
  return (
    <button
      type="submit"
      className="bg-amber-400 py-1.5 mt-6 rounded-md font-medium transition-all hover:-translate-y-1 hover:bg-[#FEAE11] cursor-pointer"
    >
      {text}
    </button>
  );
};

export default FormButton;

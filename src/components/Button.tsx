interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded-full border-2 border-yellow text-yellow hover:bg-yellow hover:text-black font-semibold py-3 px-7 transition-all"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

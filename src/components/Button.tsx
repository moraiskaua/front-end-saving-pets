interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="rounded-full bg-white shadow-lg shadow-button py-4 px-8 transition-all hover:-translate-y-2 hover:shadow-[#4BAD20] hover:bg-bg-green hover:text-white font-medium">
      {text}
    </button>
  );
};

export default Button;

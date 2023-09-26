import { InputHTMLAttributes } from 'react';

interface FormTextBoxProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

const FormTextBox = (props: FormTextBoxProps) => {
  return (
    <textarea
      className="bg-gray-200 p-3 rounded-md shadow-md
    hover:placeholder:text-black placeholder:text-gray-400 focus:outline-none resize-none"
      {...props}
    />
  );
};

export default FormTextBox;

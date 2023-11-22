import { InputHTMLAttributes } from 'react';

interface FormTextBoxProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

const FormTextBox = (props: FormTextBoxProps) => {
  return (
    <textarea
      className="bg-gray-200/40 p-3 rounded-md placeholder:text-gray-400 focus:outline-none resize-none h-28"
      {...props}
    />
  );
};

export default FormTextBox;

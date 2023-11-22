interface CustomCheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox = (props: CustomCheckboxProps) => {
  return (
    <>
      <input
        type="checkbox"
        id={props.id}
        className="hidden"
        checked={props.checked}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.id}
        className="relative w-4 h-4 rounded cursor-pointer bg-gray-200/40"
      >
        {props.checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="absolute inset-0 m-auto w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </label>
    </>
  );
};

export default CustomCheckbox;

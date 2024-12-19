type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};
const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="px-14 py-4 text-red-900 border border-white bg-white rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

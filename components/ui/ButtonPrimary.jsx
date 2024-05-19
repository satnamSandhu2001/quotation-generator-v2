const ButtonPrimary = ({ children, type, buttonClass, ...props }) => {
  return (
    <button
      {...props}
      className={`border border-primary-100 bg-primary-100 hover:bg-primary-200 text-white transition-all px-4 py-2 font-medium text-sm rounded-md ${buttonClass}`}
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

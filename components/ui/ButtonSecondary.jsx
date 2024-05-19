const ButtonSecondary = ({ children, type, buttonClass, ...props }) => {
  return (
    <button
      {...props}
      className={`border border-primary-100 hover:bg-primary-100 text-primary-100 hover:text-white transition-colors px-4 py-2 font-medium text-sm rounded-md text-right ${buttonClass}`}
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;

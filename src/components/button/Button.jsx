const Button = ({ onClick, className = '', children, type = 'button', bgColor = '' }) => {
  let bgClassName = 'bg-primary';
  switch (bgColor) {
    case 'primary':
      bgClassName = 'bg-primary';
      break;
    case 'secondary':
      bgClassName = 'bg-secondary';
      break;
    default:
      break;
  }

  console.log(bgColor);
  return (
    <button
      type={type}
      className={`capitalize py-3 px-6 rounded-lg flex gap-x-1 items-center justify-center mt-auto ${className} ${bgClassName}`}
      onClick={onClick}
    >
      {children}
      <img src="/play.svg" alt="" className="w-6" />
    </button>
  );
};

export default Button;

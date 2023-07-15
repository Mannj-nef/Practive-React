import { ReactNode } from 'react';

type classButton = 'button-primary' | 'button-secondary';

interface IButton {
  children: ReactNode;
  className?: classButton;
}

const Button = ({ children, className = 'button-primary' }: IButton) => {
  const handleClick = () => {};

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;

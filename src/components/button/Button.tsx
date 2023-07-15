import { ReactNode } from 'react';

type classButton = 'button-primary' | 'button-secondary';

interface IButton {
  children: ReactNode;
  className?: classButton;
  classCusstom?: string;
}

const Button = ({ children, className = 'button-primary', classCusstom }: IButton) => {
  const handleClick = () => {};

  return (
    <button className={`button ${className} ${classCusstom}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;

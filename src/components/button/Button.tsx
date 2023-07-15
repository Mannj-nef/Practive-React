import { ReactNode } from 'react';

type type = 'primary' | 'secondary';

interface IButton {
  children: ReactNode;
  type?: type;
  className?: string;
}

const Button = ({ children, className = 'button-primary', type = 'primary' }: IButton) => {
  const handleClick = () => {};

  return (
    <button className={`button button-${type} ${className} `} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;

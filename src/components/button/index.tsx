import { ReactNode, HTMLAttributes } from 'react';

type type = 'primary' | 'secondary';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: type;
  className?: string;
}

const Button = ({
  children,
  className = 'button-primary',
  type = 'primary',
  ...props
}: IButton) => {
  const handleClick = () => {};

  return (
    <button className={`button button-${type} ${className} `} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

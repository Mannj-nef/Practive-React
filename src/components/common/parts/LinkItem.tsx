import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

interface ILinkItem {
  href: string;
  children: ReactNode;
  className?: string;
}

const LinkItem = ({ href, children, className = '' }: ILinkItem) => {
  return (
    <Link to={href} className={`link  ${className}`}>
      {children}
    </Link>
  );
};

export default LinkItem;

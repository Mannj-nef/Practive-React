import { ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';

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

export default memo(LinkItem);

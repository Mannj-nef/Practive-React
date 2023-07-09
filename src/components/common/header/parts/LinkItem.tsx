import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ILinkItem {
  href: string;
  children: ReactNode;
}

const LinkItem = ({ href, children }: ILinkItem) => {
  return (
    <Link to={href} className='link'>
      {children}
    </Link>
  );
};

export default LinkItem;

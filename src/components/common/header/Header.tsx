import { useEffect, useState } from 'react';
import Logo from '~/components/logo';
import LinkItem from '../parts/LinkItem';
import MenuMobile from './parts/MenuMobile';

import logoImageUrl from '~/assets/images/space-neo-logo.png';
import logoBlackImageUrl from '~/assets/images/space-neo-logo-black.png';
import { ILink } from '~/interfaces/';

interface IHeader {
  links: ILink[];
}

const Header = ({ links }: IHeader) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={`header ${scrollPosition > 0 ? 'active' : ''}`}>
      <Logo src={scrollPosition > 0 ? logoBlackImageUrl : logoImageUrl}></Logo>

      <ul className='navigate'>
        {links.map((link) => (
          <li key={link.id}>
            <LinkItem href={link.href}>{link.title}</LinkItem>
          </li>
        ))}
      </ul>

      <MenuMobile></MenuMobile>
    </div>
  );
};

export default Header;

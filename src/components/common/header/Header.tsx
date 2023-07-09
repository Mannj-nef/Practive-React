import Logo from '~/components/logo';
import LinkItem from './parts/LinkItem';
import { links } from './parts/mockData';
import MenuMobile from './parts/MenuMobile';

import logoImageUrl from '~/assets/images/space-neo-logo.png';

import './style.scss';

const Header = () => {
  return (
    <div className={`header`}>
      <Logo src={logoImageUrl}></Logo>

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

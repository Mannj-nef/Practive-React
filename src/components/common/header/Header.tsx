import Logo from '~/components/logo';
import LinkItem from './parts/LinkItem';
import { links } from './parts/mockData';

import logoImageUrl from '~/assets/images/space-neo-logo.png';

import './style.scss';
import MenuMobile from './parts/MenuMobile';

const PcLayour = true;

const Header = () => {
  return (
    <div className={`header`}>
      <Logo src={logoImageUrl}></Logo>

      {PcLayour ? (
        <ul className='navigate'>
          {links.map((link) => (
            <li>
              <LinkItem key={link.id} href={link.href}>
                {link.title}
              </LinkItem>
            </li>
          ))}
        </ul>
      ) : (
        <MenuMobile></MenuMobile>
      )}
    </div>
  );
};

export default Header;

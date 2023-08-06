import Logo from '~/components/Logo';
import LinkItem from '../Link';
import MenuMobile from './parts/MenuMobile';

import logoImageUrl from '~/assets/images/space-neo-logo.png';
import { ILink } from '~/interfaces/';

interface IHeader {
  links: ILink[];
}

const Header = ({ links }: IHeader) => (
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

export default Header;

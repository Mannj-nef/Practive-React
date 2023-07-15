import Logo from '~/components/logo';

import logoImageUrl from '~/assets/images/space-neo-logo-black.png';
import LinkItem from '../parts/LinkItem';
import { ILink } from '~/interfaces/';

interface IFooter {
  links: ILink[];
}

const Footer = ({ links }: IFooter) => {
  return (
    <div className='footer'>
      <div style={{ display: 'inherit' }}>
        <Logo src={logoImageUrl}></Logo>
      </div>

      <div className='footer-wrap-right'>
        <ul className='navigate'>
          {links.map((link) => (
            <li key={link.id}>
              <LinkItem href={link.href} className='footer-link'>
                {link.title}
              </LinkItem>
            </li>
          ))}
        </ul>

        <span className='copyright'>QUEST© 2021</span>
      </div>
    </div>
  );
};

export default Footer;

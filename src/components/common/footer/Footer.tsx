import Logo from '~/components/logo';

import logoImageUrl from '~/assets/images/space-neo-logo-black.png';
import LinkItem from '../parts/LinkItem';
import { links } from './parts/dataMock';

import './style.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div style={{ display: 'inherit' }}>
        <Logo src={logoImageUrl}></Logo>
      </div>

      <div className='footer-wrapp-right'>
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

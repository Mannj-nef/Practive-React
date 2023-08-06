import { ReactNode, useState } from 'react';

import menuImageUrl from '~/assets/images/menu.png';

interface IMenuMobile {
  children?: ReactNode;
}

const MenuMobile = ({}: IMenuMobile) => {
  return (
    <div className='menu-mobile'>
      <div className='menu-wrapp'>
        <img src={menuImageUrl} alt='' />
      </div>
    </div>
  );
};

export default MenuMobile;

import { ReactNode, useState } from 'react';

import menuImageUrl from '~/assets/images/menu.png';

interface IMenuMobile {
  children?: ReactNode;
}

const MenuMobile = ({ children }: IMenuMobile) => {
  // const [showMenu, setShowMenu] = useState(false);

  // const handleShowMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <div className='menu-mobile'>
      <div className='menu-wrapp'>
        <img src={menuImageUrl} alt='' />
      </div>

      {/* {showMenu && children} */}
    </div>
  );
};

export default MenuMobile;

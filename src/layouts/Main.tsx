import { Outlet } from 'react-router-dom';
import Footer from '~/components/common/footer/Footer';
import Header from '~/components/common/header/Header';

import { linkFooters, linkHeaders } from '~/mockData/links';

const Main = () => {
  return (
    <>
      <Header links={linkHeaders} />

      <div>
        <Outlet />
      </div>

      <Footer links={linkFooters} />
    </>
  );
};

export default Main;

import { Outlet } from 'react-router-dom';
import Footer from '~/components/common/footer/Footer';
import Header from '~/components/common/header/Header';

import { linkFooters, linkHeaders } from '~/mockData/';

const Main = () => {
  return (
    <>
      <Header links={linkHeaders} />

      <Outlet />

      <Footer links={linkFooters} />
    </>
  );
};

export default Main;

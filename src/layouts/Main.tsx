import { Outlet } from 'react-router-dom';
import BackTop from '~/components/backTop/BackTop';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

import { linkFooters, linkHeaders } from '~/mockData/';

const Main = () => {
  return (
    <>
      <Header links={linkHeaders} />

      <Outlet />
      <BackTop></BackTop>

      <Footer links={linkFooters} />
    </>
  );
};

export default Main;

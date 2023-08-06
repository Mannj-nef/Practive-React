import { Outlet } from 'react-router-dom';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

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

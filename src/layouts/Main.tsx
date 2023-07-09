import { Outlet } from 'react-router-dom';
import Footer from '~/components/common/footer/Footer';
import Header from '~/components/common/header/Header';

const Main = () => {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Main;

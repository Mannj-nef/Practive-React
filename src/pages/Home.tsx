import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    document.title = 'Home page';
  }, []);

  return <div>home page</div>;
};

export default Home;

import { datasMock, datas } from '~/mockData/';
import Banner from '~/modules/home/Banner';
import Thumbnail from '~/modules/home/Thumbnail';
import Faq from '~/modules/home/Faq';

const Home = () => {
  return (
    <div className='home-page'>
      {/* banner */}
      <Banner
        bannerLaunchTitle=' Lorem ipsum text as placeholder for this section of text. To be filled in later with
            something meaningful and space themed. Lorem ipsum text as placeholder for this section
            of text. To be filled in later with something meaningful and space themed. Lorem ipsum
            text as placeholder for this section of text. To be filled in later with something
            meaningful and space themed.'
        bannerLaunchSubTitle='Lorem ipsum text as placeholder for this section of text. To be filled in later.'
      ></Banner>

      {/* thumb */}
      <Thumbnail datas={datas}></Thumbnail>
      {/* faq */}
      <Faq datas={datasMock}></Faq>
    </div>
  );
};

export default Home;

import BannerInfor from './parts/BannerInfor';
import Button from '~/components/Button';
import BannerLaunch from './parts/BannerLaunch';
import LaunchInfor from './parts/LaunchInfor';
import BannerItem from './parts/BannerItem';

import bgRocketLauncherImageURl from '~/assets/images/Sec-rocket-launcher-BG-lg.png';
import bgRocketImageURl from '~/assets/images/Sec-rocket-BG-lg.png';
import bgLaunchedImageURl from '~/assets/images/Sec-rocket-launched-BG-lg.png';
import bgLounchImageUrl from '~/assets/images/LAUNCH-txt.png';

interface IBanner {
  bannerLaunchTitle: string;
  bannerLaunchSubTitle: string;
}

const Banner = ({ bannerLaunchTitle, bannerLaunchSubTitle }: IBanner) => {
  return (
    <div className='banner'>
      <BannerItem imgUrl={bgRocketLauncherImageURl} height='1096px'>
        <BannerInfor
          subTitle='New Hawk Q7'
          title='Mission Quest 21'
          linkTitle='LEARN ABOUT THE MISSION'
        ></BannerInfor>
        <Button>WATCH THE REPLAY</Button>
      </BannerItem>

      <BannerItem imgUrl={bgRocketImageURl} height='866px'>
        <BannerInfor
          subTitle='NEW HAWK Q8'
          title='CREW MISSION 5'
          linkTitle='LEARN ABOUT THE MISSION'
        ></BannerInfor>
      </BannerItem>

      <BannerLaunch imgUrl={bgLaunchedImageURl} subImgUrl={bgLounchImageUrl}>
        <LaunchInfor title='GET INVOLVED'>
          <p>{bannerLaunchTitle}</p>
          <br />
          <p>{bannerLaunchSubTitle} </p>
        </LaunchInfor>
      </BannerLaunch>
    </div>
  );
};

export default Banner;

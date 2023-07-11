import { ReactNode } from 'react';

interface IBanner {
  alt?: string;
  imgUrl: string;
  subImgUrl: string;
  children?: ReactNode;
  height?: string;
}

const BannerLaunch = ({ imgUrl, subImgUrl, alt, children, height = '768px' }: IBanner) => {
  return (
    <div className='banner-launch-wrap' style={{ backgroundImage: `url(${imgUrl})`, height }}>
      <div className='wrap-text-image'>
        <img src={subImgUrl} alt={alt} />
      </div>

      {children}
    </div>
  );
};

export default BannerLaunch;

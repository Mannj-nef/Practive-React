import { ReactNode, memo } from 'react';

interface IBanner {
  imgUrl: string;
  children: ReactNode;
  height: string;
}

const BannerItem = ({ imgUrl, children, height }: IBanner) => {
  return (
    <div className='banner-wrap' style={{ backgroundImage: `url(${imgUrl}) `, height: height }}>
      <div className='container '>
        <div className='banner-infor'>{children}</div>
      </div>
    </div>
  );
};

export default memo(BannerItem);

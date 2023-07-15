import { Link } from 'react-router-dom';

interface IBannerInfor {
  subTitle: string;
  title: string;
  linkTitle: string;
  linkUrl?: string;
}

const BannerInfor = ({ subTitle, title, linkUrl = '', linkTitle }: IBannerInfor) => {
  return (
    <>
      <h3 className='banner-infor-sub-title'>{subTitle}</h3>
      <h2 className='banner-infor-title'>{title}</h2>
      <div>
        <Link to={linkUrl} className='banner-infor-link'>
          {linkTitle}
        </Link>
      </div>
    </>
  );
};

export default BannerInfor;

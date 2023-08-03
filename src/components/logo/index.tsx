import { memo } from 'react';

interface ILogo {
  src: string;
  alt?: string;
}

const Logo = ({ src, alt }: ILogo) => {
  return (
    <div className='logo-wrapper'>
      <img src={src} alt={alt} className={`logo`} />
    </div>
  );
};

export default memo(Logo);

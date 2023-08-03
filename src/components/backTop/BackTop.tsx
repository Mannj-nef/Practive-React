import { useEffect, useState } from 'react';
import ArrowUp from '../icons/ArrowUp';

const BackTop = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const number = 500;
    const handleIsShow = () => {
      if (window.scrollY > number) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };
    document.addEventListener('scroll', handleIsShow);

    return () => document.removeEventListener('scroll', handleIsShow);
  }, []);

  return (
    <div className='back-to-top'>
      <div className={`to-top ${isShow ? 'is-show' : ''}`} onClick={() => handleScrollToTop()}>
        <div className='icon-wrapper'>
          <ArrowUp></ArrowUp>
        </div>
      </div>
    </div>
  );
};

export default BackTop;

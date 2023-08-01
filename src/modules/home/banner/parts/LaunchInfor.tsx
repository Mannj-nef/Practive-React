import { ReactNode } from 'react';
import Button from '~/components/Button';

interface ILaunchInfor {
  title: string;
  titleButton?: string;
  children: ReactNode;
}

const LaunchInfor = ({ title = 'GET INVOLVED', titleButton, children }: ILaunchInfor) => {
  return (
    <div className='launch-infor'>
      <h2 className='launch-infor-title'>{title}</h2>
      <div className='launch-infor-desc'>{children}</div>

      <Button>{titleButton || title}</Button>
    </div>
  );
};

export default LaunchInfor;

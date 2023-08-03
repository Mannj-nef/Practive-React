import { ReactNode, memo } from 'react';

interface IFaqItem {
  title: string;
  children: ReactNode;
}

const Item = ({ children, title }: IFaqItem) => {
  return (
    <div className='faq-content'>
      <h3 className='faq-title'>{title}</h3>
      <p className='faq-desc'>{children}</p>
    </div>
  );
};

export default memo(Item);

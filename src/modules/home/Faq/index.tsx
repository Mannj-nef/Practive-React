import { memo } from 'react';
import { IdataFaq } from '~/interfaces';
import Item from './parts/Item';

import faqImageUrl from '~/assets/images/moon-phases-lg.png';

interface IFaq {
  imageUrl?: string;
  alt?: string;
  title?: string;
  datas?: IdataFaq[];
}

const Faq = ({ title = 'FAQs', datas, imageUrl = faqImageUrl, alt }: IFaq) => {
  return (
    <div className='faq'>
      <div className='faq-image'>
        <img src={imageUrl} alt={alt} />
      </div>
      <div className='faq-wrap'>
        <h2 className='faq-heading'>{title}</h2>
        {!!datas?.length &&
          datas.map((item) => (
            <Item key={item.id} title={item.title}>
              {item.desc}
            </Item>
          ))}
      </div>
    </div>
  );
};

export default memo(Faq);

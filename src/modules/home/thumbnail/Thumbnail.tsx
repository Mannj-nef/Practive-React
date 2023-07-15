import Item from './parts/Item';
import Button from '~/components/button/Button';
import { IThumbnailData } from '~/interfaces';

interface IThumbnail {
  datas: IThumbnailData[];
}

const Thumbnail = ({ datas }: IThumbnail) => {
  return (
    <div className='thumbnails '>
      {datas.map((item) => (
        <Item
          key={item.id}
          date={item.date}
          desc={item.desc}
          imgUrl={item.imgUrl}
          title={item.title}
        ></Item>
      ))}
      <div className='thumbnail-btn'>
        <Button type='secondary' className='button-thumbnail'>
          SEE ALL NEWS UPDATES
        </Button>
      </div>
    </div>
  );
};

export default Thumbnail;

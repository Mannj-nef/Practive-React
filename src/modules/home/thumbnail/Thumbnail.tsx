import datas from '~/mockData/thumbnail';
import Item from './parts/Item';
import Button from '~/components/button/Button';

const Thumbnail = () => {
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
        <Button className='button-secondary' classCusstom='button-thumbnail'>
          SEE ALL NEWS UPDATES
        </Button>
      </div>
    </div>
  );
};

export default Thumbnail;

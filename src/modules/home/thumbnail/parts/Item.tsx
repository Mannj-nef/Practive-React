interface IThumbNailItem {
  date: string;
  title: string;
  desc: string;
  imgUrl: string;
  alt?: string;
}

const Item = ({ date, title, desc, imgUrl, alt }: IThumbNailItem) => {
  return (
    <div className='thumbnail-item'>
      <div className='thumbnail-image-wrap'>
        <img src={imgUrl} alt={alt} />

        <div className='thumbnail-date'>{date}</div>
      </div>

      <div className='thumbnail-content'>
        <h3 className='thumbnail-title'>{title}</h3>
        <p className='thumbnail-desc'>{desc}</p>
      </div>
    </div>
  );
};

export default Item;

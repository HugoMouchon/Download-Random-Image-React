import ImageListItem from '../ImageListItem/ImageListItem';
import style from './style.module.scss';

export default function ImageList({ imgList }) {
  return (
    <div>
      {imgList.map(img => {
        return (
          <div key={img.id} className={style.card_item}>
            <ImageListItem img={img} />
          </div>
        );
      })}
    </div>
  )
}
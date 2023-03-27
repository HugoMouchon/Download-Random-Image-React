import style from './style.module.scss';

export default function ImageListItem({ img }) {
  return (
    <img src={img.download_url} className={style.img} />
  )
}

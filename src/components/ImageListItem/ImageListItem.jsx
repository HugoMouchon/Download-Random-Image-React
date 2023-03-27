import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import style from './style.module.scss';

export default function ImageListItem({ img }) {
  return (
    <div className={style.card}>
      <a href={img.url}>
        <img src={img.download_url} className={style.img} />
      </a>
      <div className={style.card_banner}>
        <img src={img.download_url} className={style.card_thumb} />
        <div className={style.card_text}>
          <h3 className={style.card_title}>{img.author}</h3>
          <div className={style.card_status}>
            Taille original : {img.height} x {img.width}
          </div>
        </div>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          className={style.btn}
        >
          Télécharger
        </Button>
      </div>
    </div>
  )
}

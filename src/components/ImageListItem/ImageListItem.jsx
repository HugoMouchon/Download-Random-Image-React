import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { saveAs } from 'file-saver';
import style from './style.module.scss';

export default function ImageListItem({ img }) {

  async function downloadImage() {
    const resp = await fetch(img.download_url);
    const blob = await resp.blob();
    saveAs(blob, img.author + "_" + img.id);

  }


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
          onClick={downloadImage}
          className={style.btn}
        >
          Télécharger
        </Button>
      </div>
    </div>
  )
}

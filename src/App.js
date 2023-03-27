
import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './App.module.scss';
import ImageList from './components/ImageList/ImageList';
import useScrollPosition from './hooks/useScrollPosition';

function App() {

  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();
  const [pageToFetch, setPageToFetch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImagesByPage(pageToFetch)
  }, [pageToFetch]);

  useEffect(() => {
    if (isBottom) {
      console.log("On est en bas de l'ecran, passe à la suite BROOOOOOOO")
      incrementPage();
    }
  }, [isBottom]);

  async function fetchImagesByPage(page) {
    setIsLoading(true)

    const { data } = await axios(`https://picsum.photos/v2/list?page=${page}&limit=5`);
    setImageList(imageList.concat(data));

    setIsLoading(false)
  }

  function incrementPage() {
    setPageToFetch(pageToFetch + 1);
  }

  return (
    <div className={style.root}>
      <h1>Banque d'images</h1>
      <h2 className={style.subtitle}>Télécharge des images open sources aléatoires</h2>
      <ImageList imgList={imageList} />
      {isLoading && <div className="spinner-border" role="status" /> }
    </div>
  );
}

export default App;

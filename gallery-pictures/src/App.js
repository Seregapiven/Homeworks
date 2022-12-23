import './App.css';
import { useState, useEffect } from 'react';
import PicturesList from './modules/picturesList/PicturesList';
import AlbumList from './modules/albumList/AlbumList';
import useAlbums from './modules/hooks/useAlbums';
import usePictures from './modules/hooks/usePictures';

function App() {

  const [albumId, setAlbumId] = useState();
  const albums = useAlbums();
  const pictures = usePictures(albumId);

  useEffect(() => {
    if (!albums.length) return;
    setAlbumId(albums[0].id);
  },[albums]);

  return (
    <div>
      <AlbumList albums={albums} setAlbumId={setAlbumId}/>
      <PicturesList pictures={pictures}/>
    </div>
  );
}

export default App;

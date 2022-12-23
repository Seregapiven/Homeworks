import { useEffect, useState } from 'react';
import AlbumServices from '../albumList/services/AlbumServices';

export default function useAlbums() {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
      
        AlbumServices.getList().then((data)=>setAlbums(data))
    },[])
    return albums;
}
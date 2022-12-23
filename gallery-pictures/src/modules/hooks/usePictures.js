import { useEffect, useState } from 'react';
import PicturesServices from '../picturesList/services/PicturesServices';

export default function usePictures(albumId) {

    const[pictures,setPictures]=useState([]);

    useEffect(() => {
        if (!albumId) return;
        PicturesServices.getOne(albumId).then(setPictures);
    }, [albumId]);


  return pictures
}
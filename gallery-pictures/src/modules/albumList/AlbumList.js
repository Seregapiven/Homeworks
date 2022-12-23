import React, {useState, useEffect} from 'react';
import AlbumListItem from './AlbumListItem';
import './AlbumList.css';

function AlbumList({albums, setAlbumId}) {

  return (
    <div className='album'>
      <>
        {albums.map((item) => (
          <AlbumListItem key={item.id} album={item} setAlbumId={setAlbumId } />
        ))}
      </>
    </div>
  )
};

export default AlbumList;
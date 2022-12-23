import React from 'react';


function AlbumListItem({album, setAlbumId}) {

  function getAlbumId() {
    setAlbumId(album.id);

  }
  return (
    <div onClick={getAlbumId}>{album.title}</div>
  )
};

export default AlbumListItem;
import React from 'react';


function PicturesListItem({alt,url}) {
  return (
    <div>
      <img src={url} alt={alt} style={{ width: '200px', }}/>
    </div>
  )
};

export default PicturesListItem;
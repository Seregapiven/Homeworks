import React from 'react';
import PicturesListItem from './PicturesListItem';
import './PicturesList.css';


function PicturesList({pictures}) {
  
  return (
    <div className='pictures'>
        {pictures.map((item) => (
          <PicturesListItem key={item.id} alt={item.title} url={item.url}/>
        ))}
    </div>
  )
};

export default PicturesList;
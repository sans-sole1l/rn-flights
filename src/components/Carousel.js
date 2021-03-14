import React from 'react';

function Carousel({ images }) {
  return (
    <div className="carousel">
      {images.map(el => {
        return <img className="carousel__image" src={el.link} alt={el.name} key={el._id}/>
      })}
    </div>
  )
}

export default Carousel;

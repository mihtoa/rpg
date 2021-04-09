import React from 'react';

export default function Sprite({ image, data, position }) {
  const { x, y, h, w } = data;
  return (
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      transform: `translate(${ position.x }px, ${ position.y }px)`,
      height: `${ h }px`,
      width: `${ w }px`,
      backgroundImage: `url(${ image })`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `-${ x }px -${ y }px`
    }}>
    </div>
  )
}

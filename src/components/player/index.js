import React from 'react';
import Actor from '../actor';
import useKeyPress from '../hooks/use-key-press';
import useWalk from '../hooks/use-walk';

export default function Player({ skin }) {

  const { dir, step, walk, position } = useWalk(3);

  useKeyPress((e) => {
    walk(e.key.replace('Arrow', '').toLowerCase());
    e.preventDefault();
  });

  return (
    <Actor 
      sprite={`/sprites/skins/${ skin }.png`} 
      data={{ h: 32, w: 32 }} 
      dir={ dir }
      step={ step }
      position={ position }
    />
  )
}

/* eslint-disable */
import React, { useState } from 'react';

function useHover() {
  const [hovering, setHovering] = useState(false);
  const onMouseOver = () => {
    // console.log('hovering');
  };
  const onMouseLeave = () => {
    console.log('not hover');
  };
  return {
    hovering,
    onMouseOver,
    onMouseLeave,
  };
}

export default useHover;

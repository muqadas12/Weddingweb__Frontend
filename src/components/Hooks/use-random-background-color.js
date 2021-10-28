/* eslint-disable no-unused-vars */
import React, { useState, useDebugValue } from 'react';

function useRandomColor() {
  const [color, setColor] = useState();
  const changeColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  useDebugValue(color ? 'picked Bg color ' : 'no color is picked');
  return {
    color,
    changeColor,
  };
}
export default useRandomColor;

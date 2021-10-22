/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function useRandomColor() {
  const [color, setColor] = useState();
  const changeColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return {
    color,
    changeColor,
  };
}
export default useRandomColor;

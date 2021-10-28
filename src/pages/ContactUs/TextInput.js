/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Input } from 'antd';

const TextInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // useImperativeHandle(ref, () => ({
  //   focus: () => {
  //     inputRef.current.focus();
  //   },
  // }));
  useImperativeHandle(ref, () => inputRef.current);

  return <Input {...props} ref={inputRef} />;
});

export default TextInput;

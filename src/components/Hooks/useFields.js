/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

function useFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function handleFieldChange(event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
}
export default useFields;

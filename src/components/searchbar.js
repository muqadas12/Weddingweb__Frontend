import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './search.scss';
import { SearchOutlined } from '@ant-design/icons';

const Searchbar = () => {
  const [state, setstate] = useState();
  const location = useHistory();

  const onSubmitSearch = () => {
    if (state) {
      location.push(`/${state}`);
    }
  };
  return (
    <div>
      <form>
        <input
          type="textsearchpage"
          placeholder="Search"
          value={state}
          onChange={(e) => setstate(e.target.value)}
          className="textsearchredirectpage"
          style={{ color: 'black' }}
        />

        <SearchOutlined
          type="submit"
          className="btnofsearchpagetop"
          onClick={onSubmitSearch}
        />
      </form>
    </div>
  );
};
export default Searchbar;

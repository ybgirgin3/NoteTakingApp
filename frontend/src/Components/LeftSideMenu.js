import React from 'react';
import DataController from '../Controllers/DataController';

function LeftSideMenu() {
  // options of request
  const options = {
    method: 'get',
    url: 'http://127.0.0.1:8000/api/v1/list/',
  };
  return (
    <div>
      <DataController options={options} />
    </div>
  );
}

export default LeftSideMenu;

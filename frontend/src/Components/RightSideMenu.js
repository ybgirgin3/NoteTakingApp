import React from 'react';
import DataController from '../Controllers/DataController';

function RightSideMenu() {
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

export default RightSideMenu;

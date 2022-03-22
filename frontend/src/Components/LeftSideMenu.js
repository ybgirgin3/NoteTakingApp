import React from 'react';
import TableComponent from './TableComponent';

function LeftSideMenu() {
  // options of request
  const options = {
    method: 'get',
    url: 'api/v1/list/',
    baseURL: 'http://127.0.0.1:8000',
  };
  return (
    <div>
      {/* <DataController options={options} /> */}
      <TableComponent options={options} />
    </div>
  );
}

export default LeftSideMenu;

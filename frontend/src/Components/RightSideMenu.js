import React from 'react';
import TableComponent from './TableComponent';

function RightSideMenu() {
  const options = {
    method: 'get',
    url: '/api/v1/list/',
    baseURL: 'http://127.0.0.1:8000',
  };
  return (
    <div>
      <TableComponent options={options} />
    </div>
  );
}

export default RightSideMenu;

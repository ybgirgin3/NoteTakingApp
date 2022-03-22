import React from 'react';
import DataController from '../Controllers/DataController';

function TableComponent(props) {
  const { options } = props;

  return (
    <div>
      <table className="table">
        <DataController options={options} />
      </table>
    </div>
  );
}

export default TableComponent;

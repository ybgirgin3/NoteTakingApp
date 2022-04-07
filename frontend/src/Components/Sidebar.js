import React from 'react';
import DataRenderer from './DataRendering/DataRenderer'

function Sidebar() {
  const url = `api/v1/list`;
  const method = 'get';
  const title = 'Notes';
  return (
    <div>
      <DataRenderer title={title} url={url} method={method} />
    </div>
  );
}

export default Sidebar;

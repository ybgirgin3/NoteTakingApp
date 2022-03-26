import React from 'react';
import Connection from './Connection';

function Sidebar() {
  const url = `api/v1/list`;
  const method = 'get';
  const title = 'Notes';
  return (
    <div>
      <Connection title={title} url={url} method={method} />
    </div>
  );
}

export default Sidebar;

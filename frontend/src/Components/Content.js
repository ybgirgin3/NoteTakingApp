import React from 'react';
import Connection from './Connection';

function Content() {
  const url = 'api/v1/list';
  const method = 'get';
  const title = 'Content';
  return (
    <div>
      <Connection title={title} url={url} method={method} />
    </div>
  );
}

export default Content;

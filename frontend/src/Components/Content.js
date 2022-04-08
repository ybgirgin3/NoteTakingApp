import React from 'react';
import DataRenderer from './DataRendering/DataRenderer';

function Content() {
  const url = `api/v1/list`;
  const method = 'get';
  const title = 'Content';
  return (
    <div>
        <div className="title">{title.toUpperCase()}</div>
      <DataRenderer title={title} url={url} method={method} />
    </div>
  );
}

export default Content;

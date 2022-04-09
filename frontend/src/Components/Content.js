import React from 'react';
import useFetch from './useFetch'

function Content() {
  
  const title = 'Content'

  const options = {
    url : `api/v1/list`,
    method : 'get',
  }

  const data = useFetch(options)

  // content kısmını burda renderla
  return (
    <div>
        <div className="title">{title.toUpperCase()}</div>
    {data.map((item, index) => (
      <li>{item.id} - {item.name}</li>
    ))}
    </div>
  );
}

export default Content;

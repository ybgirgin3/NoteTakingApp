import React, { useEffect, useState } from 'react';
import axios from 'axios';
import variables from '../Utils/Variables';
import './styles/general.css';

function Connection(props) {
  const [data, setData] = useState([]);
  const title = props.title;

  const options = {
    url: props.url,
    method: props.method,
    baseURL: variables.baseUrl,
  };

  //console.log('options in connection:', options);

  useEffect(() => {
    axios.request(options).then((res) => {
      setData(res.data);
      console.log(`data in ${title}:`, res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        <div className="title">{title.toUpperCase()}</div>
        {data.map((item, index) => (
          <li key={index}>
            {item.id}. {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Connection;

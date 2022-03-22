import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DataController(props) {
  // const { method, url, baseURL = 'http://localhost:8000' } = props;
  const { options } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        console.log('data:', res.data);
        setData(res.data);
        console.log('type of data var: ', typeof data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return data;
}

export default DataController;

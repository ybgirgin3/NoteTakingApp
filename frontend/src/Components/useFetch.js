import { useEffect, useState } from "react";
import axios from "axios";
import variables from "../Utils/Variables";

const useFetch = (props) => {
  const [data, setData] = useState([]);

  const options = {
    url: props.url,
    method: props.method,
    baseURL: variables.baseUrl,
  };

  // fetch data from api
  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        console.log("fetched datas: ", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err in useFetch: ", err);
        throw err;
      });
  }, []);

  return data;
};

export default useFetch;

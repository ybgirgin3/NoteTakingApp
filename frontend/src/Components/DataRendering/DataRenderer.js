import React from "react";
import variables from "../../Utils/Variables";
import useFetch from "../useFetch";
import "../styles/general.css";

function DataRenderer(props) {

  const options = {
    url: props.url,
    method: props.method,
    baseURL: variables.baseUrl,
  };

  const data = useFetch(options);

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name}-{item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataRenderer;

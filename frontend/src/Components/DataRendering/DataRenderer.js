import React from "react";
import variables from "../../Utils/Variables";
import useFetch from "../useFetch";
import "../styles/general.css";

function DataRenderer(props) {
  const title = props.title;

  const options = {
    url: props.url,
    method: props.method,
    baseURL: variables.baseUrl,
  };

  const data = useFetch(options);

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

export default DataRenderer;

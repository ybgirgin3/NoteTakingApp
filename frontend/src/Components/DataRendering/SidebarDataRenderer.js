import React from "react";
import variables from "../../Utils/Variables";
import useFetch from "../useFetch";

function SidebarDataRenderer(props) {

  const options = {
    url: props.url,
    method: props.method,
    baseURL: variables.baseUrl,
  };

  const data = useFetch(options);


  // return (
  //   <div>
  //     <ul>
  //       {data.map((item, index) => (
  //         <li key={index}>
  //           {item.id}. {item.name}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default SidebarDataRenderer;

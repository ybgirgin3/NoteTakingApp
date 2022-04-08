import React from "react";
import useFetch from "./useFetch";

function Sidebar() {
  const title = "Notes";

  const data = useFetch({
    url: `api/v1/list`,
    method: "get",
  });

  return (
    //   <div>
    //     <ul>
    //       {data.map((item, index) => (
    //         <li key={index}>
    //           {item.id}. {item.name}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>

    <div>
      <div className="title">{title.toUpperCase()}</div>
      {data.map((item, index) => (
        <button>
          {item.id}. {item.name}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;

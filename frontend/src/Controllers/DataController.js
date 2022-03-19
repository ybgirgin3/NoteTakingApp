import axios from 'axios';
import React from 'react';

function DataController(props) {
  const options = props.options;
  const [data, setData] = React.useState([]);

  // table styling
  const tableStyle = {};

  React.useEffect(() => {
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
  // <div className="content">
  //   <table>
  //     <thead>
  //       <th>ID</th>
  //       <th>NAME</th>
  //       <th>CONTENT</th>
  //     </thead>
  //     {data.map((item, index) => (
  //       <tbody key={index}>
  //         <td>{item.id}</td>
  //         <td>{item.name}</td>
  //         <td>{item.content}</td>
  //       </tbody>
  //     ))}
  //   </table>
  // </div>
}

export default DataController;

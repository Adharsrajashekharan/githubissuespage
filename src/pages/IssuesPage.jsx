
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';

// const IssuesPage = () => {
//   const [dataFromApi, setDataFromApi] = useState([]);

//   useEffect(() => {
//     getDetailsFromApi();
//   }, []);

//   const getDetailsFromApi = async () => {
//     const { data } = await axios.get('https://api.github.com/repos/octocat/Spoon-Knife/issues');
//     setDataFromApi(data);
//   };

//   return (
//     <>
//       {/* <h1>IssuesPage</h1> */}
//       <div className="table-responsive">

//       <Table  striped bordered variant="dark" >
//           <thead>
//             <tr>
//               <th>No</th>
//               <th>Title</th>
//               <th>Body</th>
//               <th>Login</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//       {dataFromApi.map((issue, index) => (
       
//           <tbody>
//             <tr>
//               <td>{issue.number}</td>
//               <td>{issue.title}</td>
//               <td>{issue.body? issue.body:"Data Not Available"}</td>
//               <td>{issue.user.login}</td>
//               <td>
//                 <img src={issue.user.avatar_url} alt={issue.user.login} width="50" height="50" />
//               </td>
//             </tr>
//           </tbody>
        
//       ))}
//       </Table>
//       </div>

//     </>
//   );
// };

// export default IssuesPage











import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { Link} from "react-router-dom"

const IssuesPage = () => {
  const [dataFromApi, setDataFromApi] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    getDetailsFromApi();
  }, []);

  const getDetailsFromApi = async () => {
    const { data } = await axios.get('https://api.github.com/repos/octocat/Spoon-Knife/issues');
    setDataFromApi(data);
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(dataFromApi.length / itemsPerPage);

  const handlePaginationClick = (event) => {
    setActivePage(Number(event.target.text));
  };

  const renderTableRows = () => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return dataFromApi.slice(startIndex, endIndex).map((issue, index) => (
      <tr key={issue.number}>
        <td>{issue.number}</td>
        <td>{issue.title}</td>
        <td>{issue.body ? issue.body : "Data Not Available"}</td>
        <td>{issue.user.login}</td>
        <td>
          <img src={issue.user.avatar_url} alt={issue.user.login} width="50" height="50" />
        </td>
        <td><Link to={issue.html_url} style={{textDecoration:"none"}} target="_blank">Click Here</Link></td>

      </tr>
    ));
  };

  const renderPaginationItems = () => {
    const items = [];

    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Pagination.Item key={i} active={i === activePage} onClick={handlePaginationClick}>
          {i}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <>
      <div className="table-responsive">
        <Table striped bordered variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Body</th>
              <th>Login</th>
              <th>Image</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </Table>
      </div>

      <div className="d-flex justify-content-center">
        <Pagination>{renderPaginationItems()}</Pagination>
      </div>
    </>
  );
};

export default IssuesPage;
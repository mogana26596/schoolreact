import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";


const Viewteacher = () => {

  const [teachers, setteacher] = useState([]);

  useEffect(() => {
      getteacher();
  }, []);

  const getteacher = async () => {
      try{
          const response = await axios.get('https://school-backend-w7w6.onrender.com/teacher/get');
          setteacher(response.data);
      }catch(error){
          console.log('Error: ', error);
      }
  }
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
         
            <div className="container-fluid">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Batches</th>
       
          </tr>
        </thead>
        <tbody>
            {teachers.length && teachers.map((teacher, index) => (
                        <tr key={index}>
                            <td>{teacher.name}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.phone}</td>
                            <td>{teacher.batches}</td>
                        </tr>
                    ))}
                </tbody>
      </table>
      </div>
        </div>
      </div>
     
      
    </div>
  )
}

export default Viewteacher;
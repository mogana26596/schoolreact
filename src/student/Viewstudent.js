import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";


const Viewstudent = () => {

  const [students, setstudent] = useState([]);

  useEffect(() => {
      getstudent();
  }, []);

  const getstudent = async () => {
      try{
          const response = await axios.get('https://school-backend-w7w6.onrender.com/student/get');
          setstudent(response.data);
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
            <th scope="col">Teacher</th>
            <th scope="col">Batch</th>
            <th scope="col">Marks</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {students.length && students.map((student, index) => (
                        <tr key={index}>
                               <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.teacher}</td>
                            <td>{student.batch}</td>
                            <td>{student.marks}</td>
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

export default Viewstudent;
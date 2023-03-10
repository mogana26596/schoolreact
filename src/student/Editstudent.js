import React, { useEffect, useState }from "react";
import '../App.css';
import axios from "axios";
import Sidebar from "../Sidebar";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom';

const Editstudent = () => {

  const navigate = useNavigate();
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
       <table class="table table-striped" >
        <thead >
          <tr>
          <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Teacher</th>
            <th scope="col">Batch</th>
            <th scope="col">Marks</th>
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
                            <td>
                            <IconButton onClick={()=>navigate("/editstudentform")} color="warning">
                              <EditIcon />
                              </IconButton>
                            </td>
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

export default Editstudent;
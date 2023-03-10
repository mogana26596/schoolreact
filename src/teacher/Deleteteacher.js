import React, { useEffect, useState }from "react";
import '../App.css';
import axios from "axios";
import Sidebar from "../Sidebar";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Deleteteacher = () => {

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
  const handleDelete = async (teacherID) => {
    try{
        const response = await axios.delete(`https://school-backend-w7w6.onrender.com/teacher/delete/${teacherID}`);
        if(response){
          getteacher();
        }
    }catch(error){
        console.log(error);
    }
}

return (
    <>  
 <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
         
            <div className="container-fluid">
       <table class="table table-striped" >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Batches</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
            {teachers.length && teachers.map((teacher, index) => (
                        <tr key={index}>
                            <td>{teacher.name}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.phone}</td>
                            <td>{teacher.batches}</td>
                            <td>
                              <IconButton onClick={() => handleDelete(teacher._id)} color="warning">
                              <DeleteIcon />
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
</>
  )
}

export default Deleteteacher ;
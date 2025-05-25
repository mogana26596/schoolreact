import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import Sidebar from '../Sidebar';
import axios from 'axios';


const Createstudent = () => {

    const navigate = useNavigate();
      const [studentDetails, setstudentDetails] = useState({
          name: '',
          email: '',
          phone: '',
          teacher: '',
          batch: '',
          marks: ''
      });
  
      const handleInput = (value) => {
          return setstudentDetails(student => {
              return {...student, ...value}
          });
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          console.log('Submitting student details...');
          try{
              const response = await axios.post('https://school-backend-w7w6.onrender.com/student/create', studentDetails);
              if(response){
                  setstudentDetails({
                    name: '',
          email: '',
          phone: '',
          teacher: '',
          batch: '',
          marks: ''
                  });
                  navigate('/viewstudent');
              }
          }catch(error){
              console.log('Error: ', error)
          }
      }
   

    return (
      <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
         
            <div className="container-fluid">
        
            <div className='dashboard1'>
           <img style={{height:"300px",width:"600px"}} src="https://appedology.com/uploads/images/2021/02/importance-of-school-management-system_750x.jpg"/>
        </div>  <div>
            <div className="add-user" style={{margin:"100px auto"}}>
                <TextField value={studentDetails.name} onChange={e => handleInput({name: e.target.value})}
                    label="Name" type="name" variant="standard" />

                <TextField value={studentDetails.email} onChange={e => handleInput({email: e.target.value})}
                    label="Email" type="email" variant="standard" />

                <TextField value={studentDetails.phone} onChange={e => handleInput({phone: e.target.value})}
                    label="Phone" type="number" variant="standard" />

                <TextField value={studentDetails.teacher} onChange={e => handleInput({teacher: e.target.value})}
                    label="Teacher" type="name" variant="standard" />

                <TextField value={studentDetails.batch} onChange={e => handleInput({batch: e.target.value})}
                    label="Batch" type="name" variant="standard" />

                <TextField value={studentDetails.marks} onChange={e => handleInput({marks: e.target.value})}
                    label="Marks" type="name" variant="standard" />
            </div>
             
            <button style={{margin:"25px  750px"}} type="button" class="btn btn-primary" onClick={handleSubmit}><b>Add Student</b></button>
        
        </div>
        </div>
        </div>
      </div>
     
      
    </div>
    )
}

export default Createstudent;
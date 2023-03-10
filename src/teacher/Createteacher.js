import React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar";
const Createteacher = () => {

    const navigate = useNavigate();
    const [teacherDetails, setteacherDetails] = useState({
        
        name: '',
        email: '',
        phone: '',
        batches: ''
    });

    const handleInput = (value) => {
        return setteacherDetails(teacher => {
            return {...teacher, ...value}
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Submitting teacher details...');
        try{
            const response = await axios.post('https://school-backend-w7w6.onrender.com/teacher/create', teacherDetails);
            if(response){
                setteacherDetails({
                    name: '',
                    email: '',
                    phone: '',
                    batches: ''
                });
                navigate('/viewteacher');
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
          <div>
              <div className="add-user" style={{margin:"100px auto"}}>
                  <TextField value={teacherDetails.name} onChange={e => handleInput({name: e.target.value})}
                      label="Name" type="name" variant="standard" />

                  <TextField value={teacherDetails.email} onChange={e => handleInput({email: e.target.value})}
                    label="Email" type="email" variant="standard" />

                <TextField value={teacherDetails.phone} onChange={e => handleInput({phone: e.target.value})}
                    label="Phone" type="number" variant="standard" />

                <TextField value={teacherDetails.batches} onChange={e => handleInput({batches: e.target.value})}
                    label="Batches" type="name" variant="standard" />


        </div> 
        <button style={{margin:"35px  650px"}} type="button" class="btn btn-primary" onClick={handleSubmit}><b>Add teacher</b></button>
        </div>
        </div> 
        </div> 
        </div> 
        </div>
    )
}

export default Createteacher;
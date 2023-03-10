import React, {useState, useEffect} from "react";
import '../App.css';
import Sidebar from "../Sidebar";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function Editstudentform() {
    const params = useParams();
    const navigate = useNavigate();
    const adminID = params.adminID;

    const [studentDetails, setstudentDetails] = useState({
        name: '',
        email: '',
        phone: '',
        teacher: '',
        batch: '',
        marks: ''
    });

    useEffect(() => {
        axios.get(`https://school-backend-w7w6.onrender.com/student/get/${adminID}`).then((response) => {
            setstudentDetails(response.data);
        }).catch(error => {
            console.log('Error: ', error);
        })
    }, [adminID]);

    const handleInput = (value) => {
        return setstudentDetails(student => {
            return {...student, ...value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Updating student details...');
        try{
            const response = await axios.put(`https://school-backend-w7w6.onrender.com/student/update/${adminID}`, studentDetails);
            if(response){
                setstudentDetails({
                    name: '',
                    email: '',
                    phone: '',
                    teacher: '',
                    batch: '',
                    marks: ''
                });
                navigate('/editstudent');
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
             
            <button style={{margin:"35px  650px"}} type="button" class="btn btn-primary" onClick={handleSubmit}><b>Add student</b></button>
        
        </div>
        </div>
        </div>
      </div>
     
      
    </div>

);
}

export default Editstudentform;
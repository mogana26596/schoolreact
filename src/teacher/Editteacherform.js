import React, {useState, useEffect} from "react";
import '../App.css';
import Sidebar from "../Sidebar";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function Editteacherform() {
    const params = useParams();
    const navigate = useNavigate();
    const adminID = params.adminID;

    const [teacherDetails, setteacherDetails] = useState({
        name: '',
        email: '',
        phone: '',
        batches: ''
    });

    useEffect(() => {
        axios.get(`https://school-backend-w7w6.onrender.com/teacher/get/${adminID}`).then((response) => {
            setteacherDetails(response.data);
        }).catch(error => {
            console.log('Error: ', error);
        })
    }, [adminID]);

    const handleInput = (value) => {
        return setteacherDetails(teacher => {
            return {...teacher, ...value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Updating teacher details...');
        try{
            const response = await axios.put(`https://school-backend-w7w6.onrender.com/teacher/update/${adminID}`, teacherDetails);
            if(response){
                setteacherDetails({
                    name: '',
                    email: '',
                    phone: '',
                    batches: ''
                });
                navigate('/editteacher');
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

);
}

export default Editteacherform;
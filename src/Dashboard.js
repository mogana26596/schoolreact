import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
           
              <div className="container-fluid">
        <div className='dashboard'>
           <img style={{height:"600px",width:"800px"}} src="https://smartstudent.app/media/2022/09/managment-software.png"/>
        </div>  
        <div>
            <Button style={{margin:"10px 600px"}} className="user-login" onClick={() => navigate('/createstudent')}
                variant="contained"><b>Student Details Login</b></Button>
        </div>
        <div>
            <Button style={{margin:"5px 600px" }} className="profile-login" onClick={() => navigate('/createteacher')}
                variant="contained"><b>Teacher Details Login</b></Button>
        </div>
        </div>
        </div>
      </div>
     
      
    </div>
      
    )
}

export default Dashboard;
import React, {useState }from "react";
import './App.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Login() {

    const navigate = useNavigate();
    const[formData, setFormData] =useState({
        email: "",
        password: ""
    }); 
      const handleSubmit = async (e) => {
          e.preventDefault();
          
          try{
              const response = await axios.post('http://localhost:3003/register/login', {...formData });
              console.log(response);console.log(formData);
              if(response.data) {
                  await localStorage.setItem("token", response.data);
                  navigate('/dashboard');
              }
              } catch(err) {
              console.log(err);
              }
      };

    return (
        <div className="bg-gradient-light" style={{height:"1000px"}}>

            <div className="container" style={{margin:"100px auto"}}>

                {/* <!-- Outer Row --> */}
                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 ">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className="col-5" style={{margin:"auto 20px"}}>
                                <img src="https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg" alt="Gir" width="400" height="400"/>
                                    </div>
                                    <div className=" col-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onClick={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="EmailID: user123@gmail.com" 
                                                        value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})} />
                                                </div><br/>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="user123"
                                                        value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})} />
                                                </div>
                                                <br/>
                                                <button style={{margin:"0px 150px"}} type="button" class="btn btn-primary" onClick={()=>navigate("/dashboard")}>Login</button>
                                                <hr />
                                                <a  href="https://www.google.co.in" className="btn btn-link" style={{padding:"7px 80px"}}  role="button">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a><br/>
                                            </form>
                                            <hr />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Login;
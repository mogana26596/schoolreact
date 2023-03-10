import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';
import Createstudent from './student/Createstudent';
import Editstudent from './student/Editstudent';
import Editstudentform from './student/Editstudentform';
import Viewstudent from './student/Viewstudent';
import Deletestudent from './student/Deletestudent';

import Createteacher from './teacher/Createteacher';
import Editteacher from './teacher/Editteacher';
import Viewteacher from './teacher/Viewteacher';
import Editteacherform from './teacher/Editteacherform';
import Deleteteacher from './teacher/Deleteteacher';

function App() {
  return (
    <>
    <div>
    
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/createstudent" element={<Createstudent />} />
                <Route path="/viewstudent" element={<Viewstudent />} />
                <Route path="/editstudent" element={<Editstudent />} />
                <Route path="/editstudentform" element={<Editstudentform />} />
                <Route path="/deletestudent" element={<Deletestudent />} />


                <Route path="/createteacher" element={<Createteacher />} />
                <Route path="/viewteacher" element={<Viewteacher />} />
                <Route path="/editteacher" element={<Editteacher />} />
                <Route path="/editteacherform" element={<Editteacherform />} />
                <Route path="/deleteteacher" element={<Deleteteacher />} />
              </Routes>
      
    </div>
</>
              
  );
}

export default App;


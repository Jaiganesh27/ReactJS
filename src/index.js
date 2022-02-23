import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Expenses from './components/Expenses';
import { BrowserRouter, Routes,Link,
  Route,Navigate ,useParams, useNavigate, useLocation} from "react-router-dom";
import Invoices from './components/Invoices';  
import Learn from './components/Learn';
import Bundles from './components/Bundles';
import Courses from './components/Courses';
ReactDOM.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Navigate replace to = "/invoices"/>} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/learn" element={<Learn />} >
        <Route path = "courses" element={<Courses/>} >
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path = "bundles" element={<Bundles/>} />
      </Route>
      <Route path="/dashboard" element = {<Dashboard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


export default function CourseId() {
   const {courseid} = useParams()
   const navigate = useNavigate()
  return (
    <div>
      <h2>Course id in URL is :{courseid}</h2>
      <button onClick={()=>{
        navigate('/dashboard',{state :courseid})
      }}>Price </button>
      
         <Link to = "/dashboard"  state={"Django"}>Django</Link>
    </div>
  );
}

export  function Dashboard() {
  const location = useLocation()
 return (
   <div>
     <h2>Price of the Course is : {location.state}</h2>
   </div>
 );
  }

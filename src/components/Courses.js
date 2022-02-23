import { NavLink, Outlet } from "react-router-dom";

export default function Courses() {
    const courseList =['angular','vue','react','nodejs']
    const randomCourseName  = courseList[Math.floor(Math.random() * courseList.length)]
    console.log(randomCourseName);
    return (
      <div>
        <h2>Courses</h2>
        <NavLink 
         style={({isActive})=>{
             return {
                 backgroundColor: isActive  ? "pink":"yellow"
             }

         }}
        to={`/learn/courses/${randomCourseName}`}>
            {randomCourseName}
        </NavLink>
        <NavLink  to={`/learn/courses/tests`}>
            tests
        </NavLink>
        <Outlet />
      </div>
    );
  }

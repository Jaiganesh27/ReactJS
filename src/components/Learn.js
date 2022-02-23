import { Link,Outlet } from 'react-router-dom';
export default function Learn() {
    return (
      <div>
        <h2>Learning </h2>
        <Link to="/learn/courses">Courses</Link> 
        <Link to="/learn/bundles">Bundles</Link> 
        <Outlet />
      </div>
     
    );
  }

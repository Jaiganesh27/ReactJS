import logo from './logo.svg';
import './App.css';
import { Link,Outlet } from 'react-router-dom';
import SignIn from './components/Invoices';
import Register from './components/Expenses';
import Home from './components/Home';
import NavBar from './NavBar';
function App() {
  return (
      <div>
        <h1>Bookkeeper!</h1>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
     </div>
  );
}

export default App;

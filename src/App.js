import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import SignIn from './components/Invoices';
import Register from './components/Expenses';
import Home from './components/Home';
import NavBar from './NavBar';
function App() {
  return (
    
      <div>
        <h1>Banking!</h1>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        {/* <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/learn">Learn</Link> */}
      </nav>
     </div>
  );
}

export default App;

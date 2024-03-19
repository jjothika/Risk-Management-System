import {Auth} from './Component/Auth';
import {Route,Routes} from "react-router-dom";
import './App.css';
import Home from './Component/Home';
import Admin from './Component/Admin';
import About from './Component/About';
import Service from './Component/Service';
import Login from './Component/Login';
import Signup from'./Component/Signup';
import User from './Component/User';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';


function App() {
  return (
    <div className="App">
      <Auth>
        <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/Login" element={<Login/>}/>
       <Route path="/Signup" element={<Signup/>}/>
       <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </Auth>
    </div>
  );
}

export default App;

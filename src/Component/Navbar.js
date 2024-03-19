
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from './Auth'
const Navbar = () => {
    const auth=useAuth()

  return (
    <div>
     <nav className='navbar' >
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/admin'>Admin</NavLink>
     <NavLink to='/user'>User</NavLink>
     {!auth.user&&<NavLink to='/Login'>Login</NavLink>}
     {!auth.user&&<NavLink to='/signup'>Signup</NavLink>}
     
     </nav> 
    </div>
  )
}

export default Navbar
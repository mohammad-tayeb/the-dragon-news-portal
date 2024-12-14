import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleSignOut = () => {
        logOut()
        .then()
        .catch(error =>{
          console.log(error)
        })
  }

  const links = <>
    <li className="text-white"><NavLink to="/">Home</NavLink></li>
    <li className="text-white"><NavLink to="/about">About</NavLink></li>
    <li className="text-white"><NavLink to="/career">Career</NavLink></li>
    <li className="text-white"><NavLink to="/register">Create An Acoount</NavLink></li>
  </>

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          {
            user ? <Link onClick={handleSignOut} className='btn btn-outline mx-3 text-white' to="/login">Sign Out</Link> : <Link className='btn btn-outline mx-3 text-white' to="/login">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
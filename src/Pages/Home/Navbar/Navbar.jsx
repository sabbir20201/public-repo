import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import UseCart from "../../../Hooks/UseCart";
import { FaDollyFlatbed } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);

      })
  }
  const navLinks = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/surveys">Surveys</Link></li>
    <li><Link to="/pricing">Pricing<FaDollyFlatbed className="text-red-600 text-2xl" /></Link></li>
    {
      user && <li><Link to="/dashboard/cart">DASHBOARD</Link></li>
    }
    


  </>
  return (
    <div>
      <div className="navbar bg-slate-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">

            <img className="w-12 rounded-full" src="https://i.ibb.co/4ZCv8K5/images.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>


        <div className="navbar-end">
          <div>
            {user?.email}
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="" src={user?.photoURL} />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              <li>
                {
                  user ? <button onClick={handleLogOut}>logout</button> : <Link to="/login"><button>login</button></Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
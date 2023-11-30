import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5";
const Dashboard = () => {
    const isAdmin = true;

    return (

        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">

                <ul className="menu mt-12">
                    {
                        isAdmin ? <>
                           <li>
                        <NavLink to="/dashboard/cart">
                            {/* <FaHome></FaHome> */}
                            <FaAlignJustify />
                            Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/survey">
                            {/* <FaHome></FaHome> */}
                            <IoBagAddSharp />
                            Add items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageUser">
                            <FaHome></FaHome>
                        Manage items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                            <FaHome></FaHome>
                        All users</NavLink>
                    </li>
                        </>
                        :
                        <>
                           <li>
                        <NavLink to="/dashboard/cart">
                            {/* <FaHome></FaHome> */}
                            <FaAlignJustify />
                            Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/survey">
                            {/* <FaHome></FaHome> */}
                            <IoBagAddSharp />
                            Add Survey</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageUser">
                            <FaHome></FaHome>
                        Manage Survey</NavLink>
                    </li>
                        </>
                    }
                 
                    
                    <div className="divider">or</div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                        Home</NavLink>
                    </li>
             
                </ul>
                
            </div>
            <div className="flex-1">
                <div className="bg-blue-500">
                    <h1 className="text-white font-bold text-4xl p-4">Dashboard</h1>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
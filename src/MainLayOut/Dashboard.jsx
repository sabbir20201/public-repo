import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5";
import useAdmin from "../Hooks/useAdmin";
import { FaUsersGear } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
const Dashboard = () => {

    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    // console.log(isAdmin);
    return (

        <div className="flex max-w-6xl mx-auto">
            <div className="w-64 min-h-full bg-orange-400 h-screen">

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
                                <GrDocumentUpdate />
                                    Manage items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                <FaUsersGear />
                                    All users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/usersProfile">
                                <FaRegUserCircle />
                                 Users Profile</NavLink>
                            </li>
                        </>
                            :
                            <>
                               
                            </>
                    }


                    <div className="divider">or</div>
                    <li>
                                <NavLink to="/">
                                <FaRegUserCircle />
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
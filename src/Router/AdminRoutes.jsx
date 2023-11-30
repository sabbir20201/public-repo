import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";




const AdminRoutes = () => {
    const [user, loading] = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-lg"></span>
   
   
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default AdminRoutes;
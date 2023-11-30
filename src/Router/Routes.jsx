import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Pages/Home/Home/Home';
import Surveys from '../Pages/Surveys/Surveys';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Dashboard from '../MainLayOut/Dashboard';
import Cart from '../Pages/Dashboard/Cart/Cart';
import Survey from '../Pages/Dashboard/Survey/Survey';
import ManageUser from '../Pages/Dashboard/ManageUser/ManageUser';
import UpdateSurvey from '../Pages/Dashboard/UpdateSurvey/UpdateSurvey';
import AllUser from '../Pages/Dashboard/AllUsers/AllUser';
import Details from '../Pages/Details/Details';


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/surveys",
                element: <Surveys></Surveys>
            },
            {
                path: "/surveyDetails/:id",
                element: <Details></Details>
            },
        
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
           
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "survey",
                element: <Survey></Survey>
            },
            {
                path: "manageUser",
                element: <ManageUser></ManageUser>
            },
            {
                path: "updateSurvey/:id",
                element: <UpdateSurvey></UpdateSurvey>
            },
            // admin routes
            {
                path: 'users',
                element: <AllUser></AllUser>
            }

        ]
    }


])

export default Routes;
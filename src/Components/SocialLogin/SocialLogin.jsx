import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName

            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')

            })
            
            console.log(userInfo);
        })
    }
    
    return (
        <div className="p-8">
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle />
                    <h1>sign in with google</h1>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
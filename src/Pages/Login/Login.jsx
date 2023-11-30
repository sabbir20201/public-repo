import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
    const {login } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result =>{
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User login successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
        })
        .catch(error =>{
            console.error(error.message)

        })
    }
    return (
        <div>
           
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <h1>Are you new here ?<Link to="/register" className='text-green-600'> SignUp</Link></h1>
                        </form>
                        <div className="divider">OR</div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
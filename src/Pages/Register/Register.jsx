import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Register = () => {
    const axiosPublic = useAxiosPublic(); 
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result =>{
            // create user entry in the database 
            const userInfo = {
                name,
                email
                
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User crated successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                  navigate('/')
                    console.log(result.user);
                }
                // navigate 
            })
           
        })
        .catch(error =>{
            console.error(error.message);

        })
    }
    return (
        <div>
               <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <h1>Already have an account ?<Link to="/login" className='text-green-600'>Login</Link></h1>
                        </form>
                   
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
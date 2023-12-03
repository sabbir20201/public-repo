import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const UpdateSurvey = () => {
    const data = useLoaderData()
    const formRef = useRef()
    console.log(data.length);
    console.log(data._id);
    const axiosSecure = useAxiosSecure()
    const handleUpdateSurvey = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;

        const updatedUser = {
            title,
            description,
            category
        }
        
        // console.log(updatedUser);
        axiosSecure.put(`/update/${data._id}`, updatedUser)
        .then(res =>{
            console.log(res.data);
            if(res.data.matchedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  formRef.current.reset()
            }
          
        })
        .catch(error =>{
            console.log("error here:",error);
        })


    }
    return (
        <div>
            <h1>update a survey title: {data.title}</h1>
            <div className="hero bg-base-200">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form ref={formRef} onSubmit={handleUpdateSurvey} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Survey Title</span>
                                </label>
                                <input type="text" name="title" defaultValue={data.title} placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">category</span>
                                    </label>
                                    <select className="select select-bordered" name="category" defaultValue={data.category}>
                                        <option disabled selected >Pick one</option>
                                        <option>Social Issue</option>
                                        <option>Education and Learning</option>
                                        <option>Work and Carrer</option>
                                        <option>Health and Wellness</option>
                                        <option>Politics AND Current affairs</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" defaultValue={data.description} placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default UpdateSurvey;
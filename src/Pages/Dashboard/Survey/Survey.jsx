import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Survey = () => {
    const axiosSecure = useAxiosSecure()
    const handleSurvey = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;

        const addUser = {
            title,
            description,
            category
        }
        
        console.log(addUser);
        axiosSecure.post('/addSurvey', addUser)
        .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
          
        })
        .catch(error =>{
            console.log("error here:",error);
        })
        // fetch("https://assignment-12-server-nu-roan.vercel.app/addSurvey", {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(addUser)
        // })
        // .then(res =>{
        //     res.json()
        // })
        // .then(data =>{
        //     console.log(data)
        // })
    }
    return (
        <div>
                <h1 className="my-9 mx-auto font-bold text-3xl">Add A Survey</h1>
            <div className="hero bg-base-200">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSurvey} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Survey Title</span>
                                </label>
                                <input type="text" name="title" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">category</span>
                                    </label>
                                    <select className="select select-bordered" name="category">
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
                                <input type="text" name="description" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
           
        </div>
    );
};

export default Survey;
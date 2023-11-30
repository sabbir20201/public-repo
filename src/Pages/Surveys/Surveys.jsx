import { useEffect, useState } from "react";
import SurveyCard from "./SurveyCard";

const Surveys = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://assignment-12-server-nu-roan.vercel.app/getAllSurveys")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    console.log(data);
    return (
        <div className="my-10">
            <div className="mb-6">
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <button className="btn btn-neutral">Search</button>
            </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
            {
                data?.map(item => <SurveyCard key={item._id} item={item}></SurveyCard>)
            }
           </div>

        </div>
    );
};

export default Surveys;
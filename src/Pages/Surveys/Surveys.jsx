import { useEffect, useState } from "react";
import SurveyCard from "./SurveyCard";

const Surveys = () => {
    const [data, setData] = useState([])
    const [filterValue, setFilterValue] = useState('')

    useEffect(() => {
        fetch("https://assignment-12-server-nu-roan.vercel.app/getAllSurveys")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    const handleFilter = (event)=>{
        setFilterValue(event.target.value);
    }
    const filteredData = data.filter(item => 
        item.category.toLowerCase().includes(filterValue.toLowerCase()) || item.title.toLowerCase().includes(filterValue.toLowerCase())
    )

    console.log(data);
    return (
        <div className="my-10">
            <h1 className="text-center text-2xl font-bold mb-3">Survey Details</h1>
            <div className="mb-6 max-w-6xl mx-auto flex justify-center">
                <div>
                <form onChange={handleFilter}>
                <input type="text" placeholder="Just type here" className="input input-bordered input-primary w-full max-w-xs" />

                </form>
                <h1 className="pt-2">You can search here by category and title</h1>
                </div>
               
            {/* <button onChange={handleFilter} className="btn btn-neutral">Search</button> */}
            </div>

         
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
            {
                filteredData?.map(item => <SurveyCard key={item._id} item={item}></SurveyCard>)
            }
           </div>

        </div>
    );
};

export default Surveys;
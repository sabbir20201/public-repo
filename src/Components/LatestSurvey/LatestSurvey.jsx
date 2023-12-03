
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LatestSurveyCard from "./LatestSurveyCard";


const LatestSurvey = () => {

    const [data, setData] = useState([])
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        // const axiosPublic = useAxiosPublic();
        axiosPublic.get('/getAllSurveys')
            .then(result => {
                // console.log(result.data);
                setData(result.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mb-6">Latest Surveys</h1>
            <div className="my-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        data.map(item => <LatestSurveyCard key={item._id} item={item}></LatestSurveyCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default LatestSurvey;
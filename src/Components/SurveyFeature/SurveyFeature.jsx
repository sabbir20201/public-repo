import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SurveyFeatureCard from "./SurveyFeatureCard";

const SurveyFeature = () => {


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
        <div className="my-10">
            <h1 className="text-center text-4xl font-bold mb-6">Featured Surveys</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        data.map(item => <SurveyFeatureCard key={item._id} item={item}></SurveyFeatureCard>)
                    }
                </div>
        </div>
    );
};

export default SurveyFeature;
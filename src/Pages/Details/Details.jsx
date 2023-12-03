import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Details = () => {
    const data = useLoaderData();
    const [liked, setLike] = useState(0)
    const [disliked, setDisLike] = useState(0)
    // const [interActionDone, setInterActionDone] = useState(false)
    const like = ()=>{
            setLike(liked + 1)
            setDisLike(0)
    }
    const disLike = ()=>{
            setLike(0)
            setDisLike(disliked + 1)
    }
 console.log(data);
    return (
        <div>
            <SectionTitle heading={"Survey Details"}></SectionTitle>
        <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto mb-10">
                <div className="card-body">
                    <h2 className="card-title">Title: {data.title}</h2>
                    <h2 className="card-title">Category:{data.category}</h2>
                    <p>{data.description}</p>
                    <p>Like:{liked} </p> <span>Dislike: {disliked}</span>
                    <p>Timestamp: </p>
                  
                    <div className="card-actions justify-start">
                        <button onClick={like} className="btn btn-primary">Like </button>
                        <button onClick={disLike} className="btn btn-primary">Dislike</button>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Details;
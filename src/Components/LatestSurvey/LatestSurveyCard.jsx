import React from 'react';

const LatestSurveyCard = ({item}) => {
    const {title, _id, description, category} = item

    return (
        <div>
                 <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Title: {title}</h2>
                    <h2 className="card-title">Category:{category}</h2>
                    <p>{description}</p>
                    <p>Like: </p> <span>Dislike: </span>
                    <p>Timestamp: </p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestSurveyCard;
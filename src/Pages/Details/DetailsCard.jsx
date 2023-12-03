import React from 'react';

const DetailsCard = ({item}) => {
    const {title} = item
    return (
        <div>
            {title}
        </div>
    );
};

export default DetailsCard;

import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    
    return (
        <div className="space-y-5 border border-base-200 shadow p-5 rounded ">
            <img
                className="w-full h-[350px] object-cover rounded"
                src={news.image_url}
                alt=""
            />
            <h2 className="text-2xl font-bold leading-10">{news.title}</h2>

            <p className='text-lg font-normal leading-7'>{news.details}</p>
            <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
                {" "}
                Back to Category
            </Link>
        </div>
    );
};

export default NewsDetailsCard;
import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            {/* <span className="loading loading-spinner text-error"></span> */}
            <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-secondary"></div>
        </div>
    );
};

export default Loading;
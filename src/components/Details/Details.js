import React from 'react';

const Details = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-sreen w-11/12 lg:w-8/12 mx-auto my-24'>
            <div className='dark:bg-gray-900 dark:text-slate-100 p-6 bg-white shadow-md rounded-lg'>
                <p className='text-4xl font-bold'>Total completed task</p>
            </div>
            <div className='dark:bg-gray-900 dark:text-slate-100 p-6 bg-white shadow-md rounded-lg'>
                <p className='text-4xl font-bold'>Total incompleted task</p>
            </div>
        </div>
    );
};

export default Details;
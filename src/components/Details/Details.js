import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Details = () => {
    const { data: allTasks } = useQuery({
        queryKey: ['all-task'],
        queryFn: () => fetch(`${process.env.REACT_APP_api_url}/all-task`).then(res => res.json()).then(data => data)
    })

    const completedTasks = allTasks?.filter(task => {
        return task.isCompleted
    })

    const incompletedTasks = allTasks?.filter(task => {
        return !task.isCompleted
    })
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-sreen w-11/12 lg:w-8/12 mx-auto my-24'>
            <div className='dark:bg-gray-900 dark:text-slate-100 p-6 bg-white shadow-md rounded-lg'>
                <p className='text-4xl font-bold'>Total completed task</p>
                <p className='mt-12 text-center text-4xl text-blue-700 font-extrabold'>{completedTasks?.length}</p>
            </div>
            <div className='dark:bg-gray-900 dark:text-slate-100 p-6 bg-white shadow-md rounded-lg'>
                <p className='text-4xl font-bold'>Total incompleted task</p>
                <p className='mt-12 text-center text-4xl text-blue-700 font-extrabold'>{incompletedTasks?.length}</p>
            </div>
        </div>
    );
};

export default Details;
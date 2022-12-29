import React, { useRef } from 'react';

const SingleCompletedTask = ({ completedTask, handleDelete, handleNotCompleted, handleComment }) => {
    const userCommentRef = useRef()


    const handleSubmit = (id) => {
        const userComment = userCommentRef.current.value;
        handleComment(userComment, id)
        userCommentRef.current.value = ''
    }
    return (
        <div className='my-24 bg-white dark:bg-gray-900 shadow-md'>
            <div className="flex flex-col items-center bg-white border md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
                <img className="object-cover w-full h-96 md:h-auto md:w-48" src={completedTask?.imageURL} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{completedTask?.task}</p>
                    <div>
                        <button onClick={() => handleNotCompleted(completedTask?._id)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-modal-toggle="popup-modal">Not completed</button>
                        <button onClick={() => handleDelete(completedTask?._id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    </div>
                </div>
            </div>
            {
                completedTask.comments?.map((comment, index) => <p
                    key={index}
                    className='border border-slate-700 dark:text-slate-200 rounded-full text-gray-900 p-3 m-2'
                >{comment}</p>)
            }
            <div className='flex'>
                <input className='w-full' type="text" ref={userCommentRef} />
                <button onClick={() => handleSubmit(completedTask?._id)} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Comment</button>
            </div>
        </div>
    );
};

export default SingleCompletedTask;
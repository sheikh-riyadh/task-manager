import React from 'react';

const SingleTask = ({ myTask, handleDelete, handleUpdate }) => {

    const { task, _id, imageURL, isCompleted } = myTask
    return (
        <div>
            <div href="#" className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={imageURL} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{task}</p>
                    <div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                        <button onClick={() => handleDelete(_id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                        <button disabled={isCompleted} onClick={() => handleUpdate(_id)} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{isCompleted ? "Task completed" : "Complete"}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleTask;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const UpdateTask = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { register, handleSubmit, reset } = useForm();

    const updateTaskData = useLoaderData()
    const navigate = useNavigate()

    setTimeout(() => {
        setIsLoading(false)
    }, 1000);

    /* Handle submit form */
    const onSubmit = (data) => {

        setIsLoading(true)
        const { task } = data;

        const image = data.photo[0]
        const formData = new FormData()
        formData.append('image', image)

        /* Save image on imageBB server */
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_TOKEN}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then((data) => {
            if (data.success) {
                const imageURL = data?.data?.display_url;
                const addTask = {
                    task,
                    imageURL,
                    id: updateTaskData?._id
                }

                /* save add task on database here */
                fetch(`${process.env.REACT_APP_api_url}/update-task`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(addTask)
                }).then(res => res.json()).then(data => {
                    if (data.acknowledged || data.modifiedCount > 0) {
                        toast.success("Task updated successfully")
                        navigate('/my-task')
                        reset()
                        setIsLoading(false)
                    }
                }).catch(error => console.log(error))
            }
        }).catch(error => console.log(error))



    }


    return (
        <div className='w-6/12 mx-auto shadow-lg p-12 my-12 dark:bg-gray-900 rounded-xl bg-white'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label htmlFor="message" className="uppercase text-2xl font-bold block mb-5 text-gray-900 dark:text-white">Update task</label>
                    <textarea {...register("task")} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." required defaultValue={updateTaskData?.task}></textarea>
                </div>
                <div className="mb-6">
                    <input {...register("photo")} type="file" accept=".png, .jpg, .jpeg" id="password" className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                    {isLoading ? <><svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>
                        Processing...
                    </> : "Update"}
                </button>
                <Link to='/my-task' type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Cancel</Link>
            </form>
        </div>
    );
};

export default UpdateTask;
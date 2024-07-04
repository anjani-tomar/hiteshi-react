import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';

const Forms = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='p-11 text-center text-white'>
            <form className="max-w-sm mx-auto bg-black p-11 rounded-md">
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-900 border border-gray-800 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
                        p-2.5 dark:bg-gray-700 dark:border-gray-800 dark:placeholder-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        required
                    />
                </div>
                <div className="mb-5 relative">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium dark:text-white"
                    >
                        Your password
                    </label>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        className="bg-gray-900 border border-gray-800 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
                        p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       
                        required
                    />
                    <button
                        type="button"
                        className="absolute top-10 right-0 flex items-center px-3 bg-gray-900 rounded-r-lg focus:outline-none"
                        onClick={togglePasswordVisibility}
                    >
                        <FontAwesomeIcon icon={passwordVisible ?   faUnlock :faLock} className="text-gray-500" />
                    </button>
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600
                             dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                        />
                    </div>
                    <label
                        htmlFor="remember"
                        className="ms-2 text-sm font-medium dark:text-gray-300"
                    >
                        Remember me
                    </label>
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full
                     sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Forms;

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const experienceObj = {
    id: uuidv4(),
    companyName: "",
    companyExperience: 0
}
const EmployeeForm = () => {
    const [employeeDetails, setEmployeeDetails] = useState([
        experienceObj
    ])

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        setEmployeeDetails((prev) => {
            const temp = [...prev];
            const index = temp.findIndex((x) => x.id === id);
            temp[index][name] = value;
            return temp;
        });
    }

    const handleAdd = () => {
        setEmployeeDetails((prev) => [...prev, { ...experienceObj, id: uuidv4() }])
    }
    const handleDelete = (id) => {
        setEmployeeDetails((prev) => prev.filter(x => x.id != id));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(employeeDetails));
    }
    return (
        <div className="bg-white m-5 p-2 w-full h-96 rounded-lg overflow-y-auto">
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                    {employeeDetails.map((item, index) => <EmployeeFields key={item.id} employeeDetail={item} handleChange={(e) => handleChange(e, item.id)} handleDelete={() => handleDelete(item.id)} />)}
                </div>
                <div className='flex items-center justify-center'>
                <button onClick={handleAdd} className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                <button type="submit" onClick={handleSubmit} className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </div>
            </form>
        </div>

    )
}


const EmployeeFields = ({ employeeDetail, handleChange, handleDelete }) => {

    return (
        <>
            <div>
                <label htmlFor="company_Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company name</label>
                <input type="text" name="companyName" value={employeeDetail.companyName} onChange={handleChange} id="company_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div>
                <label htmlFor="company_Experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                <input type="number" name="companyExperience" value={employeeDetail.companyExperience} onChange={handleChange} id="company_Experience" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3" required />
            </div>
            <div className="grid gap-2 mt-5 md:grid-cols-3">
                <button onClick={handleDelete} className="m-2 col-start-2 h-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
            </div>
        </>
    )
}


export default EmployeeForm
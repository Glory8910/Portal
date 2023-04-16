import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

function JobForm(props) {

    
    const [newJob, setNewJob] = props.data
    const handleChange = (e) => {
        
        setNewJob((prev) => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    return (
        <Card color="transparent" shadow={false}>
       
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium   text-fontcolor">
                        Job title
                        </span>
                        <input type="text" name="jobTitle" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex. UX UI Designer" 
                        onChange={handleChange} value={newJob.jobTitle}/>
                    </label>

                    <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium   text-fontcolor">
                        Company name
                        </span>
                        <input type="text" name="companyName" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex. Google"
                         onChange={handleChange} value={newJob.companyName} />
                    </label>

                    <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium   text-fontcolor">
                        Industry
                        </span>
                        <input type="text" name="industry" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex. Information Technology " 
                         onChange={handleChange} value={newJob.industry}/>
                    </label>
                    <div className='flex'>
                    <label class="block pr-4">
                        <span class="after:ml-0.5 after:text-red-500 block text-sm font-medium   text-fontcolor">
                        Location
                        </span>
                        <input type="text" name="location" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex. Chennai"
                         onChange={handleChange} value={newJob.location} />
                    </label>
                    <label class="block pl-4">
                        <span class="after:ml-0.5 after:text-red-500 block text-sm font-medium   text-fontcolor">
                        Remote type
                        </span>
                        <input type="text" name="remoteType" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex. In-office "
                         onChange={handleChange} value={newJob.remoteType} />
                    </label>

                    </div>

                  

                </div>
             

            </form>

        </Card>)
}

export default JobForm
import React, { useEffect, useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

function StepTwoForm(props) {
    const [newJob, setNewJob] = props.data
    const [checkedQuickApply,setCheckedQuickApply]= useState(false)
    const [checkedExternalApply,setcheckedExternalApply]= useState(false)

    useEffect(()=>{
        if(newJob?.applyType ==="Quick apply"){
            setcheckedExternalApply(false)
            setCheckedQuickApply(true)
        }
        else if(newJob?.applyType==="External apply"){
            setcheckedExternalApply(true)
            setCheckedQuickApply(false)
        }
    },[])

    const handleChange = (e) => {
        
        if(e.target.name==="applyType"){
           if(e.target.value==="Quick apply"){
            setCheckedQuickApply(true);
            setcheckedExternalApply(false)
           }
           else{
            setCheckedQuickApply(false);
            setcheckedExternalApply(true)
           }
            setNewJob((prev) => {
                return {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            })
        }
        else
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

                    <div className='flex'>
                        <label class="block pr-4">
                            <span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Experience
                            </span>
                            <input type="text" name="expMin" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Minimum" 
                           onChange={handleChange} value={newJob.expMin} />
                        </label>
                        <label class="block pl-4">
                            <span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">

                            </span>
                            <input type="text" name="expMax" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Maximum" 
                            onChange={handleChange} value={newJob.expMax} />
                        </label>

                    </div>
                    <div className='flex'>
                        <label class="block pr-4">
                            <span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Salary
                            </span>
                            <input type="number" name="salaryMin" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Minimum" 
                            onChange={handleChange} value={newJob.salaryMin} />
                        </label>
                        <label class="block pl-4">
                            <span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">

                            </span>
                            <input type="number" name="salaryMax" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Maximum" 
                           onChange={handleChange} value={newJob.salaryMax} />
                        </label>

                    </div>

                    <label class="block">
                        <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Total employee
                        </span>
                        <input type="number" name="totalEmployee" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex. 100"
                       onChange={handleChange} value={newJob.totalEmployee} />
                    </label>

                    <label class="block">
                        <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Apply type
                        </span>
                    </label>

                    <div class="flex items-center space-x-4">
                        <label for="quickApply" class="inline-flex items-center">
                            <input type="radio" id="quickApply" name="applyType" class="h-4 w-4 text-blue-600 border-gray-300" 
                           checked={checkedQuickApply} onChange={handleChange} value="Quick apply"/>
                            <span class="ml-2 text-gray-700">Quick apply</span>
                        </label>
                        <label for="externalApply" class="inline-flex items-center">
                            <input type="radio" id="externalApply" name="applyType" class="h-4 w-4 text-blue-600 border-gray-300" 
                          checked={checkedExternalApply}  onChange={handleChange} value="External apply" />

                            <span class="ml-2 text-gray-700">External apply</span>
                        </label>
                    </div>



                </div>


            </form>

        </Card>)
}

export default StepTwoForm
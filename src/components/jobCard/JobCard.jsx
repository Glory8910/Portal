import React, { useEffect, useState } from 'react'
import Rectangle from "../../Images/Rectangle.png"
import axios from "axios"


function JobCard(props) {
    const [jobId, setJobId] = useState()

    const [newJob, setNewJob] = props.editJob
    const [btnName, setBtnName] = props.btn
    const [setpNo,setstepNo]=props.stepNos

    const [open, setOpen] = props.modal



    const handleDelete = () => {
        setJobId(props.cardValue?.id)


    }

    const handleEdit = () => {
        setNewJob(props.cardValue)
        setOpen(true)
        setstepNo(1)
        setBtnName("Edit")
    }

    useEffect(() => {
        if (jobId) {
            axios.delete(`https://643982a34660f26eb1b4fda0.mockapi.io/api/v1/newJob/${jobId}`)
                .then(function (response) {
                    
                    props.handleDelJob(props.cardValue?.id)

                })
                .catch(function (error) {
                    console.log(error);


                });
        }


    }, [jobId])


    return (


        <div class="flex flex-wrap bg-cardborder w-1/2 p-4">

            <div class="w-2/12 p-2 bg-cardcolor">
                <img class="h-15 w-20 rounded-t-lg" src={Rectangle} alt="Logo" />
            </div>


            <div class="w-8/12 p-2 flex-col justify-start  bg-cardcolor">

                <h5 class=" text-xl font-medium text-0 dark:text-neutral-50      ">
                    {props.cardValue?.jobTitle}
                </h5>



                <p class=" text-base text-fontcolor dark:text-neutral-200">
                    {props.cardValue?.companyName}-{props.cardValue?.industry}
                </p>
                <p class="text-xs  text-placeholder dark:text-neutral-300">
                    {props.cardValue?.location} ({props.cardValue?.remoteType})
                </p>

                <div class="pt-10">
                    <p class="text-xs mb-1 text-fontcolor dark:text-neutral-300">
                        Experience ({props.cardValue?.expMin} - {props.cardValue?.expMax})years
                    </p>
                    <p class="text-xs mb-1  text-fontcolor dark:text-neutral-300">
                        INR (₹) {props.cardValue?.salaryMin} - {props.cardValue?.salaryMax} / Month
                    </p>
                    <p class="text-xs mb-3 text-fontcolor dark:text-neutral-300">
                        {props.cardValue?.totalEmployee} employees
                    </p>
                </div>
        <div className='p-2 bg-cardcolor'>
            {
                props?.cardValue?.applyType.length >1 ? 
        <button className= ' bg-blue-400 text-white rounded p-3 pr-5 active:bg-blue-700' onClick={()=>{}} > {props?.cardValue?.applyType.toString()}</button>
                :
                <></>
            }

        </div>

            </div>

            <div className='w-1/12 flex-col justify-end bg-cardcolor'>
                <button className="float-right right-0 m-2 p-2  text-fontcolor hover:text-red-500 focus:outline-none" onClick={handleEdit}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                </button>
            </div>
            <div className='w-1/12 flex-col justify-end bg-cardcolor'>

                <button className="float-right right-10 m-2 p-2  text-fontcolor hover:text-blue-500 focus:outline-none" onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>

                </button>
            </div>

        </div>

    )
}

export default JobCard


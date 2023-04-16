import React, { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import JobForm from '../form/JobForm'
import StepTwoForm from '../form/StepTwoForm'
import axios from "axios";
import JobCard from '../jobCard/JobCard';
import card from '@material-tailwind/react/theme/components/card';


function Mainpage() {
  const [open, setOpen] = useState(false)
  const [stepNo, setstepNo] = useState(1)
  const [post, setPost] = useState(false)
  const [edit, setEdit]=useState(false)
  const [errorMsg, setErrorMsg] = useState()
  const [cardData,setCardData]=useState()
  const [btnName, setBtnName] = useState("save")
  const [get,setGet]=useState(false)

  // https://643982a34660f26eb1b4fda0.mockapi.io/api/v1/:endpoint

  const [newJob, setNewJob] = useState({
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
    expMax: '',
    expMin: "",
    salaryMax: "",
    salaryMin: "",
    totalEmployee: "",
    applyType: "",

  })


  let data = {
    "jobTitle": "Principal Assurance Agent",
    "companyName": "Legros, Romaguera and Christiansen",
    "industry": ">=mSnj{a`'",
    "location": "location 1",
    "remoteType": "remoteType 1",
    "expMin": 96,
    "expMax": 56,
    "salaryMin": 69,
    "salaryMax": 69,
    "totalEmployee": "totalEmployee 1",
    "applyType": false,
    "id": "1"
  }

  useEffect(() => {
 

      axios.get('https://643982a34660f26eb1b4fda0.mockapi.io/api/v1/newJob', newJob)
        .then(function (response) {
          setCardData(response.data)
          setGet(false)

        })
        .catch(function (error) {
          console.log(error);
          setGet(false)

        });


    

  }, [get])


  useEffect(() => {
    if (post) {

      axios.post('https://643982a34660f26eb1b4fda0.mockapi.io/api/v1/newJob', newJob)
        .then(function (response) {
          setPost(false)
          setGet(true)

        })
        .catch(function (error) {
          console.log(error);
          setPost(false)

        });


    }

  }, [post])

  useEffect(() => {
    if (edit) {

      axios.put(`https://643982a34660f26eb1b4fda0.mockapi.io/api/v1/newJob/${newJob.id}`, newJob)
        .then(function (response) {
          setCardData((prev)=>{
            let newdata=[...prev]
            newdata.map((el)=>{
              if(el.id==response.data.id){
                return response.data
              }
              else return el
            })
            return newdata
          })
       
          setEdit(false)
          setGet(true)

        })
        .catch(function (error) {
          console.log(error);
          setEdit(false)

        });


    }

  }, [edit])

  useEffect(() => {
    if (newJob.jobTitle.length > 1 && newJob.industry.length > 1 && newJob.companyName.length > 1) {
      setErrorMsg("")
    }
  }, [newJob.Title, newJob.industry, newJob.companyName])

  const handleClick = () => {
    setstepNo(1)
    setNewJob({
      jobTitle: "",
      companyName: "",
      industry: "",
      location: "",
      remoteType: "",
      expMax: '',
      expMin: "",
      salaryMax: "",
      salaryMin: "",
      totalEmployee: "",
      applyType: "",

    })
    setOpen((cur) => !cur)
    setBtnName("save")
  }
  const closeModal = () => {
    setOpen(false)
  }

  const handleNext = (e) => {

    if (newJob.jobTitle.length < 1 || newJob.industry.length < 1 || newJob.companyName.length < 1) {
      setErrorMsg("Enter all the mandatory fields")
    }
    else {
      setstepNo(2)
      setErrorMsg("")

    }


  }

  const handleSave = (e) => {
    if(e.target.name==="save"){
      setPost(true)
      
      setOpen(false)

    }
    else{
      setEdit(true)
      // setGet(true)
      setOpen(false)
    }
  }

  const handleDelete=(jobID)=>{
    setCardData((prev)=>{
      return cardData.filter((el)=>{
        if(el.id!==jobID){
          return el;
        }
      })
    })
  }




  return (
    <>
      <div className='container p-2  bg-cardborder' >
        <div className='block'>
          <button className='  bg-primarycolor text-white rounded p-3 float-right active:bg-blue-700' onClick={handleClick}> Create Job</button>

          <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Create a Job
                        <span className='float-right'>
                          step {stepNo}
                        </span>
                      </Dialog.Title>
                      <div className="mt-2">
                        {
                          stepNo === 1 ? <JobForm data={[newJob, setNewJob]}></JobForm> : <StepTwoForm data={[newJob, setNewJob]} />
                        }

                      </div>

                      {errorMsg && <p className="text-sm text-errorcolor ">{errorMsg}</p>}

                      <div className="mt-4">


                        {
                          stepNo === 1 ?
                            <button className='  bg-primarycolor text-white rounded p-3 float-right active:bg-blue-700' name="Next" onClick={(e) => {

                              handleNext(e)
                            }}> Next </button>

                            :
                            <button className='  bg-primarycolor text-white rounded p-3 float-right active:bg-blue-700' name={btnName} onClick={(e) => {

                              handleSave(e)
                            }}> {btnName} </button>


                        }


                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>





        </div>
        <div className='flex flex-wrap   '  >
          {
            cardData?.map((el,ind)=>{
              return    <JobCard cardValue={el} key={el?.id} editJob={[newJob, setNewJob]} modal={[open,setOpen]} btn={[btnName, setBtnName]} handleDelJob={handleDelete}
              stepNos={[stepNo,setstepNo]}></JobCard>
       
            })
          }
          
          </div>
      
      </div>
    </>
  )
}

export default Mainpage
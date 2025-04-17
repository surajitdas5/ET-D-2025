import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { API } from '../utils/constants'
import { useAuth } from '../context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import { fomrmatDate } from '../utils/utilityFunctions'

const UpdateEvent = () => {

    const { token } = useAuth()

    const titleRef = useRef()
    const descriptionRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()
    const linkRef = useRef()
    const statusRef = useRef()

    const [message, setMessage] = useState("")

    const { id } = useParams()
    const navigate = useNavigate();
    const [ event, setEvent ] = useState({})

    const getEventDetails = async() => {
        try{
            let data = await axios.get(`${API}/events/${id}`)
            console.log(data.data);
            setEvent(data.data)
            let e = data.data
            titleRef.current.value = e.title  
            descriptionRef.current.value = e.description
            startDateRef.current.value = fomrmatDate(e.startDate)
            endDateRef.current.value = fomrmatDate(e.endDate)
            linkRef.current.value = e.link ? e.link : ""
            statusRef.current.value = e.status
        } catch(error){
            console.log(error);
            if(error.status === 400){
                alert("Invalid Id");
            } 
            navigate("/")
        }
        
    }
    useEffect(()=>{
        getEventDetails();
    }, [id])


    const handleSubmit = async(e) => {
        e.preventDefault()

        let title = titleRef.current.value
        let description = descriptionRef.current.value
        let startDate = startDateRef.current.value
        let endDate = endDateRef.current.value
        let link = linkRef.current.value
        let status = statusRef.current.value

        let eventData = { title, description, startDate, endDate, link, status }

        try {
            let res = await axios.put(`${API}/events/${event._id}`, eventData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            if(res.status == 200){
                setMessage("Event Updated")
            }
        } catch (error) {
            setMessage("Event not updated")
            console.log(error)
        }
    }
  return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h3>Update Event</h3>
                    <span>{message}</span>
                </div>
                <div className="card-body">
                    <form method="post" onSubmit={handleSubmit}>
                        Event Title
                        <input ref={titleRef} type='text' className='form-control mb-1' required />
                        Event Description
                        <textarea ref={descriptionRef} rows={5} className='form-control mb-1' required></textarea>
                        Start Date
                        <input ref={startDateRef} type='date' className='form-control mb-1' required />
                        End Date
                        <input ref={endDateRef} type='date' className='form-control mb-1' required />
                        Link(Optional)
                        <input ref={linkRef} type='text' className='form-control mb-1' required />
                       Event Status
                       <select ref={statusRef} className='form-control mb-2' required>
                        <option value="">--Select--</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                        <option value="canceled">Canceled</option>
                       </select>
                        <input type='submit' value="Update Event" className='btn btn-dark w-100 mt-2' />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateEvent
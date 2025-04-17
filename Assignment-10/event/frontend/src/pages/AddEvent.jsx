import axios from 'axios'
import React, { useRef, useState } from 'react'
import { API } from '../utils/constants'
import { useAuth } from '../context/AuthContext'

const AddEvent = () => {

    const { token } = useAuth()

    const titleRef = useRef()
    const descriptionRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()
    const linkRef = useRef()
    const eventImageRef = useRef()

    const [message, setMessage] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()

        let title = titleRef.current.value
        let description = descriptionRef.current.value
        let startDate = startDateRef.current.value
        let endDate = endDateRef.current.value
        let link = linkRef.current.value
        let eventImage = eventImageRef.current.files[0]

        let eventData = new FormData()
        eventData.append('title', title)
        eventData.append('description', description)
        eventData.append('startDate', startDate)
        eventData.append('endDate', endDate)
        eventData.append('link', link)
        eventData.append('eventImage', eventImage)

        try {
            let res = await axios.post(`${API}/events`, eventData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
            if(res.status == 201){
                setMessage("Event Ceated")
                titleRef.current.value = ""  
                descriptionRef.current.value = ""
                startDateRef.current.value = ""
                endDateRef.current.value = ""
                linkRef.current.value = ""
            }
        } catch (error) {
            setMessage("Event not added")
            console.log(error)
        }
    }
  return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h3>Add an Event</h3>
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
                        Event Banner
                        <input ref={eventImageRef} type='file' className='form-control mb-1' required />
                        <input type='submit' value="Add Event" className='btn btn-dark w-100 mt-2' />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEvent
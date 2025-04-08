import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EventDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [ event, setEvent ] = useState({})

    const getEventDetails = async() => {
        try{
            let data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/events/${id}`)
            console.log(data.data);
            setEvent(data.data)
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
  return (
    <div className='row g-2'>
        <div className="col-md-6">
        <img src={event.eventImage} className='img-fluid w-100' />
        </div>
        <div className="col-md-6">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><span className='fw-semibold'>Start Date: </span>{new Date(event.startDate).toLocaleDateString()}</p>
            <p><span className='fw-semibold'>End Date: </span>{new Date(event.endDate).toLocaleDateString()}</p>
            <div className="card">
                <div className="card-body">
                    <p className='card-title lead fw-bold'>Contact Person</p>
                    <span className='d-block fw-semibold'>{event?.user?.name}</span>
                    <span className='d-block'>{event?.user?.mobile}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventDetails
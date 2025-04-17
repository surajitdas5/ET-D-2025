import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getUserFromToken } from '../utils/utilityFunctions'
import { useAuth } from '../context/AuthContext'
import { API } from '../utils/constants'

const EventDetails = () => {
    const { token } = useAuth()
    const { id } = useParams()
    const navigate = useNavigate();
    const [ event, setEvent ] = useState({})

    const isOwner = event?.user?._id == getUserFromToken()

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

    const handleDelete = async() => {
        let res = confirm("Are you sure?")
        if(res){
            try {
                let response = await axios.delete(`${API}/events/${event._id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                if(response.status === 200){
                    navigate("/")
                } 
            } catch (error) {
                console.log(error)
            }
        }
    }

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
                { isOwner &&
                    <div className="card-footer">
                        <Link to={`/update/${event._id}`} className='btn btn-info me-2'> Update</Link>
                        <button onClick={handleDelete} className='btn btn-danger'>Delete</button>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default EventDetails
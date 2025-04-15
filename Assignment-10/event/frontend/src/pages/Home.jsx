import { useState, useEffect } from 'react'
import axios from 'axios'
import EventCard from '../componets/EventCard'

const Home = () => {
    console.log(import.meta.env.VITE_BACKEND_URL)
    const [ events, setEvents ] = useState([])
    const getEvents = async() => {
        try {
            let data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/events`)
            console.log(data.data);
            setEvents(data.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getEvents()
    }, [])
  return (
    <div className='row g-2'>
        {
            events.map( event => (
                <div className="col-md-4" key={event._id}>
                    <EventCard event={event} />
                </div>
            ))
        }
    </div>
  )
}

export default Home
import axios from 'axios'
import { useRef, useState } from 'react'
import EventCard from '../componets/EventCard'

const Search = () => {
    const searchRef = useRef()
    const [ events, setEvents ] = useState([])
    const [error, setError ] = useState("")
    const handleSubmit = async (e) => {
        setError("")
        e.preventDefault()
        let key = searchRef.current.value
        console.log(key)
        try {
            let data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/events/search?title=${key}`)
            console.log(data.data);
            setEvents(data.data)
        } catch (error) {
            setEvents([])
            setError("No Data Found")
        }
    }

  return (
    <>
    <div className='row'>
        <div className="col-md-4 mx-auto">
            <form method="post" onSubmit={handleSubmit}>
                <div className="row g-0">
                    <div className="col-8">
                        <input ref={searchRef} className="form-control" type="text" placeholder='Search Event' required />
                    </div>
                    <div className="col-2">
                        <input type='submit' value="Search" className='btn btn-dark' />
                    </div>
                </div>
            </form>
        </div>
    </div>
    {
        error.length > 0 ? (
            <p>{error}</p>
        ) : (
            <div className='row g-2 my-3'>
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
</>
  )
}

export default Search
import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({ event }) => {
    let { _id, title, eventImage } = event
  return (
    <div className="card">
        <img src={eventImage} className="card-img-top" alt="..." style={{height: "120px"}} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <Link to={`/${_id}`} className="btn btn-primary">Read More</Link>
        </div>
    </div>
  )
}

export default EventCard
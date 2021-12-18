import React from "react"

export default function Card(props){
    return (
        <div>
           <img className="card-img" src={props.item.imageUrl} />
           <div className="card-body">
                <p className="card-location-box">
                    <img width="20px"
                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-map-pin-basic-ui-elements-flatart-icons-outline-flatarticons.png"/>
                    <span className="card-location">{props.item.location}</span> 
                    <a className="card-map-view" href={props.item.googleMapsUrl}>View on Google Maps</a>  
                </p>
                <h2 className="card-title">{props.item.title}</h2>
                <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card-description">{props.item.description}</p>
           </div>
        </div>
    )
}
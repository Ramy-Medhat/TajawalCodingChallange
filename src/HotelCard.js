import React from 'react';
import './style.css';
const HotelCard = ({name,city,price}) => {
    return(
        <div className="col-xs-12 col-sm-6">
           <div className='hotel-card'>
                <h3>{name}</h3>
                <p className='price'>Price: <span>{price}</span> AED</p>
                <p className='city'>City: <span>{city}</span></p> 
           </div>
        </div>
    )
}


export default HotelCard;
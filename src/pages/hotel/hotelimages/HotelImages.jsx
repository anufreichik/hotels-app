import React from 'react';
import france from '../../../images/france.png'
import './hotelimages.css';
const HotelImages = ({data}) => {
    return (
        <div className='hotelDetailsImagesContainer'>
            <div className="hotelDetailsImagesWrapper">
                <div className='mainHotelDetailsImage'>
                    <img src={france} />
                </div>
                <img className='gridHotelDetailsImage' src={france}/>
                <img className='gridHotelDetailsImage' src={france}/>
                <img className='gridHotelDetailsImage' src={france}/>
                <img className='gridHotelDetailsImage' src={france}/>
            </div>
        </div>
    );
};

export default HotelImages;

import React from 'react';
import france from '../../../images/france.png'
import './hotelimages.css';
const HotelImages = ({data}) => {
    return (
        <div className='imagesContainer'>
            <div className="imagesWrapper">
                <div className='mainImage'>
                    <img src={france} />
                </div>
                <img className='gridImage' src={france}/>
                <img className='gridImage' src={france}/>
                <img className='gridImage' src={france}/>
                <img className='gridImage' src={france}/>
            </div>
        </div>
    );
};

export default HotelImages;

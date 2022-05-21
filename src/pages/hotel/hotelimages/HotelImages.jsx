import React from 'react';
import france from '../../../images/france.png'
import './hotelimages.css';
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/loading/Loading";
const HotelImages = ({hotelid}) => {
    const {data, loading, error} = useFetch(
        `https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos`,
        {hotel_id: hotelid},
        hotelid
    );
    return (
        <>
            {loading && <Loading/>}

            <div className='hotelDetailsImagesContainer'>
                <div className="hotelDetailsImagesWrapper">
                    <div className='mainHotelDetailsImage'>
                        <img src={data[0]?.baseUrl.replace(/{size}/,'z')}/>
                    </div>
                    {
                        data?.slice(1,5).map(el=>(
                            <img className='gridHotelDetailsImage' src={el.baseUrl.replace(/{size}/,'z')}/>
                        ))
                    }

                </div>
            </div>
        </>
    );
};

export default HotelImages;

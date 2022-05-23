import React from 'react';
import france from '../../../images/france.png'
import './hotelimages.css';
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/loading/Loading";
//https://exp.cdn-hotels.com/hotels/16000000/15470000/15463400/15463349/6c5608cc_e.jpg
const HotelImages = ({hotelid}) => {
    const {data, loading, error} = useFetch(
        `https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos`,
        {hotel_id: hotelid},
        hotelid
    );
    return (
        <>
            {loading && <Loading/>}
                <div className="hotelDetailsImagesContainer">
                    <div className='mainHotelDetailsImage'>
                        <img src={data[0]?.baseUrl.replace(/{size}/,'z')}/>
                    </div>
                    {
                        data?.slice(1,5).map((el, i)=>(
                            <img className='gridHotelDetailsImage' key={i} src={el.baseUrl.replace(/{size}/,'z')}/>
                        ))
                    }

                </div>

        </>
    );
};

export default HotelImages;

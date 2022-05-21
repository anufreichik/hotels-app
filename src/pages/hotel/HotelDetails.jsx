import React,{useContext} from 'react';
import {useLocation} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {SearchContext} from "../../context/SearchContext";
import Loading from "../../components/loading/Loading";
import HotelImages from "./hotelimages/HotelImages";

const HotelDetails = () => {
    const location = useLocation();
    const hotelid = location.pathname.split('/')[2];
    const {dates, options} = useContext(SearchContext);
    const searchParams = {
        adults_number: options.adult,
        checkin_date: dates.checkin_date,
        locale: 'en_US',
        currency: 'USD',
        hotel_id: hotelid,
        checkout_date: dates.checkout_date
    }

    const {data, loading, error} = useFetch(
        `https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details`,
        searchParams,
        hotelid
    );
    return (
        <div>
            {loading && <Loading/>}
            <div className='hotelDetailsContainer'>
                <div className="hotelDetailsWrapper">

                    <div className="hotelImages">
                        <HotelImages hotelid={hotelid}/>
                    </div>
                    <div className="hotelDetailsOverview">

                    </div>
                    <div className="hotelRoomTypes">

                    </div>
                    <div className="hotelAmenities">

                    </div>
                    <div className="hotelroomAmenities">

                    </div>
                    <div className='hotelWhatsAround'>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default HotelDetails;

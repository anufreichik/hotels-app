import React, {useContext, useEffect, useState} from 'react';
import {SearchContext} from "../../context/SearchContext";
import Search from "../../components/search/Search";
import useFetch from "../../hooks/useFetch";
import HotelListItem from "../../components/hotellistitem/HotelListItem";
import './hotelslist.css';
import Loading from "../../components/loading/Loading";


const HotelsList = () => {
    const {region, destinationId, destination, dates, options} = useContext(SearchContext);

    let searchParams = {
        checkin_date: dates.checkin_date,
        checkout_date: dates.checkout_date,
        sort_order: 'STAR_RATING_HIGHEST_FIRST',
        destination_id: destinationId,
        adults_number: 1,
        locale: 'en_US',
        currency: 'USD',
        //children_ages: undefined,
        price_min: '10',
        star_rating_ids: '3,4,5',
        //accommodation_ids: undefined,
        price_max: '500',
        page_number: '1',
        // theme_ids: undefined,
        // amenity_ids: undefined,
        // guest_rating_min: undefined
    }

    const {data, loading, error, reFetch} = useFetch(
        `https://hotels-com-provider.p.rapidapi.com/v1/hotels/search`,
        searchParams,
        destinationId
    );

    useEffect(() => {
        reFetch();
    }, [destinationId])//, options.adult, dates.checkin_date, dates.checkout_date

    return (
        <div>
            <Search/>
            {loading && <Loading/>}
            {/*{error && <div>{error.response.data.detail[0].msg}</div>}*/}
                <div className="hotelListContainer">
                    {data?.searchResults?.results.map((el, ind) =>
                        (
                            <HotelListItem key={el.id} item={el}/>
                        )
                    )}
                </div>

        </div>
    );
};

export default HotelsList;

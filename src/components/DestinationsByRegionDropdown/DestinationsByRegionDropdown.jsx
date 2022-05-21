import React, {useContext, useEffect} from 'react';
import './destinationsByRegionDropdown.css'
import useFetch from "../../hooks/useFetch";
import {SearchContext} from "../../context/SearchContext";


const DestinationsByRegionDropdown = ({handleDestinationIdChange}) => {
    const { region, dispatch } = useContext(SearchContext);


    const {data, loading, error} = useFetch(
        `https://hotels-com-provider.p.rapidapi.com/v1/destinations/search`,
        {query: region, currency: 'USD', locale: 'en_US'},
        region
    );

    useEffect(() => {

        if(!Array.isArray(data)){
            let defaultOption = data?.suggestions[0]?.entities.sort(sortHelper)[0].destinationId;
            dispatch({ type: "UPDATE_SEARCH", payload: { destinationId: defaultOption } });
        }

    }, [data]);


    const handleChange = (e) => {
        handleDestinationIdChange(e.target.value);
    };
    const sortHelper = (a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
    return (
        <>
            {
                loading ?
                    ("Loading...")
                    :
                    (
                        <select className="regionSelect" onChange={(e) => handleChange(e)}>
                            {data?.suggestions[0].entities.sort(sortHelper).map((item, ind) => (
                                <option className='regionOption' key={ind} value={item.destinationId}>
                                    {item.name} - {region}
                                </option>
                            ))}
                        </select>

                    )
            }

        </>

    );
};

export default DestinationsByRegionDropdown;

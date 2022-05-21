import React, {useState, useContext} from 'react';
import './search.css'
import DateRange from "react-date-range/dist/components/DateRange";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {format} from "date-fns";
import icon_calendar from '../../images/icon_calendar.svg';
import icon_travelers from '../../images/icon_travellers.svg';
import icon_destination from '../../images/icon_destination.svg';
import {SearchContext} from "../../context/SearchContext";
import DestinationsByRegionDropdown from "../DestinationsByRegionDropdown/DestinationsByRegionDropdown";
import addDays from "date-fns/addDays";


const Search = () => {

    const { region,destinationId, destination, dates, options, dispatch } = useContext(SearchContext);
    const [inputDestinationId, setInputDestinationId] = useState("")
    const [inputDestinationName, seInputDestinationName] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [inputDates, setInputDates] = useState([
        {

            startDate: addDays(new Date(), 29),
            endDate: addDays(new Date(), 30),
            key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [inputOptions, setInputOptions] = useState({
        adult: 1,
        children: 0,
    });

    const handleDestinationIdChange=(val)=>{
        setInputDestinationId(val);
        //dispatch({ type: "UPDATE_SEARCH", payload: { destinationId: val } });
    }

    const handleSearchReset = () => {
        dispatch({ type: "RESET_SEARCH" });
    };

    // dates:{
    //     checkin_date: format(addDays(new Date(), 29),'yyyy-MM-dd'),
    //         checkout_date: format(addDays(new Date(), 30),'yyyy-MM-dd'),
    // },
    const handleSearch = () => {
        dispatch({ type: "UPDATE_SEARCH", payload: { destinationId: inputDestinationId } });
        // dispatch({ type: "UPDATE_SEARCH", payload: { destinationId: inputDestinationId,
        //         dates:{
        //             checkin_date:inputDates.startDate,
        //             checkout_date:inputDates.endDate
        //         } ,
        //         options: {
        //             adult: inputOptions.adult,
        //             children: inputOptions.children,
        //             room: undefined,
        //         },
        // } });
    };
    return (
        <div className='searchContainer'>
            <div className="searchWrapper">
                <div className="searchTitle">
                    <span className="searchTitleText">Find your journey</span>
                </div>
                <div className="searchItemsContainer">
                    <div className="searchItem">
                        <div>
                            <img src={icon_destination}/>{' '}
                            {
                                (region)?<DestinationsByRegionDropdown handleDestinationIdChange={handleDestinationIdChange}/>:
                                    <input
                                        type="text"
                                        placeholder="Destination"
                                        className="headerSearchInput"
                                        onChange={(e) => seInputDestinationName(e.target.value)}
                                    />
                            }

                        </div>

                        <span className='headerSearchText'>Where Are you going?</span>
                    </div>
                    <div className="searchItem">
                        <div onClick={() => setOpenDate(!openDate)}>
                            <img src={icon_calendar}/>{' '}
                            <span className='searchItemTitle'>When</span>
                        </div>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setInputDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={inputDates}
                                className="date"
                                minDate={new Date()}
                            />
                        )}
                        <span
                            className="headerSearchText"
                        >{`${format(inputDates[0].startDate, "MM/dd/yyyy")} to ${format(
                            inputDates[0].endDate,
                            "MM/dd/yyyy"
                        )}`}</span>
                    </div>

                    <div className="searchItem">
                        <div onClick={() => setOpenOptions(!openOptions)}>
                            <img src={icon_travelers}/>{' '}
                            <span className='searchItemTitle'>Travelers</span>
                        </div>
                        <span
                            onClick={() => setOpenOptions(!openOptions)}
                            className="headerSearchText"
                        >{`${inputOptions.adult} adult · ${inputOptions.children} children`}</span>
                    </div>
                    <div className="searchItem">
                        <div className='buttonsWrapper'>
                        <button className='buttonSearch' onClick={handleSearch}>
                            Find
                        </button>
                        <button className='buttonSearch buttonReset' onClick={handleSearchReset}>
                            RESET
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

import React, { useState} from 'react';
import {Link} from "react-router-dom";
import './roomtypes.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

const Roomtypes = ({data}) => {
    const initialArrayOfSlides = [];
    data?.roomsAndRates?.rooms?.forEach((item) => {
        initialArrayOfSlides.push({curSlide: 0, len: item.images.length});
    })

    const [roomSlides, setRoomSlides] = useState(initialArrayOfSlides);

    const handleMove = (direction, index) => {
        let newList;

        if (direction === "l") {
            newList = roomSlides.map((el, i) => {
                if (index !== i) return el;
                else return {...el, curSlide: el.curSlide === 0 ? el.len - 1 : el.curSlide - 1}
            })
        } else {
            newList = roomSlides.map((el, i) => {
                if (index !== i) return el;
                else return {...el, curSlide: el.curSlide === el.len - 1 ? 0 : el.curSlide + 1}
            })
        }

        setRoomSlides(newList);
    };


    return (
        <div className='roomtypes-container'>
            {
                data?.roomsAndRates?.rooms?.map((room, ind) => {

                    return (
                        <div className="roomtypes-item" key={ind}>
                            <div className="room-images-container">
                                <FontAwesomeIcon
                                    icon={faCircleArrowLeft}
                                    className="arrow-left"
                                    onClick={() => handleMove("l", ind)}
                                />
                                <img src={room.images[roomSlides[ind].curSlide]?.fullSizeUrl}
                                     alt={room.images[roomSlides[ind].curSlide].caption}/>
                                <FontAwesomeIcon
                                    icon={faCircleArrowRight}
                                    className="arrow-right"
                                    onClick={() => handleMove("r", ind)}
                                />
                            </div>
                            <h3>{room.name}</h3>
                            <div className='room-info'>
                                <div
                                    dangerouslySetInnerHTML={{__html: room.additionalInfo?.description.split('<br/>')[0] || ''}}/>
                                <span>{room.maxOccupancy?.messageTotal}</span>
                                <span>{room.bedChoices?.mainOptions[0] || ''}</span>
                                <span>{room.ratePlans[0]?.cancellation?.title}</span>
                                <Link to='./'>More details ></Link>
                            </div>
                            <div>
                                <h4>Extras</h4>

                                {room.ratePlans[0].features?.map((f, fi) => {
                                    return (
                                        <div key={fi}>{f?.info}</div>
                                    )
                                })}
                            </div>

                            <div>
                                <div>{room.ratePlans[0]?.price?.fullyBundledPricePerStay}</div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default Roomtypes;

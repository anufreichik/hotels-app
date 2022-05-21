import React from 'react';
import {Link} from "react-router-dom";
import './hotellistitem.css';

const HotelListItem = ({item}) => {
    return (
        <div className="hotelListItemContainer">
            <img src={item.optimizedThumbUrls?.srpDesktop} alt="" className="siImg"/>
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span
                    className="siAddress">{`${item.address.streetAddress}, ${item.address.locality || ''}, ${item.address.countryName}, ${item.address.postalCode || ''}`}
                </span>
                <span
                    className="siDistance">{`${item.landmarks[0]?.distance} to ${item.landmarks[0].label || ''}`}
                </span>
                {item.roomsLeft &&  <span className="siSubtitle">
                        {`Rooms left: ${item.roomsLeft}`}
                </span>}


                {item.ratePlan.features.freeCancellation &&
                    <>
                        <span className="siFeatures">Features</span>
                        <span className="siCancelOp">Free cancellation </span>
                        <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                    </span>
                    </>
                }

            </div>
            <div className="siDetails">
                {item.starRating && <div className="siRating">
                    <span>Excellent</span>
                    <button>{item.starRating}</button>
                </div>}
                <div className="siDetailTexts">
                    {/*<span className="siPrice">{item.deals[0]?.dealText}</span>*/}
                    <span className="siPrice">{item.ratePlan.price.fullyBundledPricePerStay}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item.id}`}>
                        <button className="siCheckButton">See details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotelListItem;

import React from 'react';
import {Link} from "react-router-dom";
import './hoteloverview.css';
import check from '../../../images/check_in_circle.svg';
import locImage from '../../../images/location-around.svg';
const HotelOverview = ({data}) => {
    console.log(data)
    return (
        <div className='hotel-overview-container'>
            <div className="hotel-overview-leftSection">
                <div className="hotel-overview-header">
                    <h2>{data.name}</h2>
                    {/*<div dangerouslySetInnerHTML={ {__html: data?.tagline[0] | ''} } />*/}
                    <h4>{data?.starRating}/5 Wonderful</h4>
                    <span>features</span>
                    <Link to={'./reviews'}>Reviews</Link>
                </div>
                <div className='hotel-overview-amenities-container'>
                    <h3 className='amenities-heading'>Popular amenities</h3>
                    <div className='amenities-items'>
                        {
                            data?.overview?.overviewSections[0]?.content?.map((el, ind)=>
                                <div key ={`amen-${ind}`} className='amenities-item'>
                                    <img src={check}/><span>{el}</span>
                                </div>
                            )

                        }
                    </div>
                </div>

            </div>
            <div className="hotel-overview-rightSection">
                    <div className="map-section-container">
                        <div><img  scr={data?.mapWidget?.staticMapUrl}/></div>
                        <div><span>{data?.address?.fullAddress}</span></div>
                    </div>
                    <div className="explore-section-container">
                        <h3 className='amenities-heading'>Explore the area</h3>
                        <div className='what-around-section'>
                            {
                                data?.overview?.overviewSections[1]?.content?.slice(1,6).map((el, ind)=>
                                    <div key ={`amen-${ind}`} className='amenities-item'>  <img src={locImage}/><span>{el}</span></div>
                                )

                            }
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default HotelOverview;

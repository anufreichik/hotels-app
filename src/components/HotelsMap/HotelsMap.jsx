import React, {useState} from 'react';
import {
    useLoadScript,
    GoogleMap,
    Marker
} from '@react-google-maps/api'
const libraries = ['places'];

const HotelsMap = ({results}) => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
        libraries: libraries
    });

    const center = {lat: results?.[0].coordinate?.lat, lng: results?.[0].coordinate?.lon}

    const [map, setMap] = useState(/** @type google.maps.Map*/(null));

    if (!isLoaded) return (<div> Map is loading...</div>);

    return (
        <div style={{marginTop:50}}>
            <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '400px'}}
                       options={{
                           zoomControl: true,
                           streetViewControl: true,
                           mapTypeControl: false,
                           fullscreenControl: false
                       }} onLoad={(map) => {
                setMap(map)
            }}>
                {
                    results?.map(el=> <Marker position={{lat:el?.coordinate.lat, lng:el?.coordinate.lon}}/>)
                }

            </GoogleMap>
        </div>
    );
};

export default HotelsMap;

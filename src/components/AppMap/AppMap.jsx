import React, {useRef, useState} from 'react';
import {
    useLoadScript,
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer
} from '@react-google-maps/api'

const center = {lat: 48.8584, lng: 2.2945}
const libraries = ['places'];
const AppMap = () => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
        libraries: libraries
    });

    const [map, setMap] = useState(/** @type google.maps.Map*/(null));
    const [directionResponse, setDirectionResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef();


    async function calculateRoute() {
        if (originRef.current.value === '' || destinationRef.current.value === '') return;

// eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING
        })

        setDirectionResponse(results);
        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.text);

    }

    function clearRoute() {
        setDirectionResponse(null);
        setDistance('');
        setDuration('');
        originRef.current.value = '';
        destinationRef.current.value = '';

    }

    if (!isLoaded) return (<div> Map is loading...</div>);


    return (
        <>
            <button onClick={() => map.panTo(center)}>Recenter</button>
            {distance}
            {duration}
            <Autocomplete>
                <input type='text' placeholder={'origin'} ref={originRef}/>
            </Autocomplete>
            <Autocomplete>
                <input type='text' placeholder={'destination'} ref={destinationRef}/>
            </Autocomplete>
            <button onClick={calculateRoute}>Calculate Route</button>
            <button onClick={clearRoute}>Clear Route</button>
            <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '800px', height: '800px'}}
                       options={{
                           zoomControl: false,
                           streetViewControl: false,
                           mapTypeControl: false,
                           fullscreenControl: false
                       }} onLoad={(map) => {
                setMap(map)
            }}>

                <Marker position={center}/>
                {directionResponse && <DirectionsRenderer directions={directionResponse}/>}
            </GoogleMap>
        </>
    );
};

export default AppMap;

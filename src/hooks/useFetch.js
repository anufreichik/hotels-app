import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, params, conditionVal) => {
    //conditionVal=true/false
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const options = {
        method: 'GET',
        url: url,
        params: params,
        headers: {
            'X-RapidAPI-Host':process.env.REACT_APP_RAPID_API_HOST,
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.request(options);
                setData(res.data);

            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        if(conditionVal) fetchData();
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.request(options);
            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    return { data, loading, error, reFetch };
};

export default useFetch;

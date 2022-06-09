import { useState, useEffect } from 'react';
import propTypes from 'prop-types';


function useFetch(url, id) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)
    useEffect(() => {
        setLoading(true);
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((actualData) => {
                actualData === "can not get user" ? setError(true) : setData(actualData.data);
            })
            .catch((err) => {
                setError(true)
            })
            .finally(() => setLoading(false))
    }, [])
    return { data, isLoading, hasError }
}
export default useFetch

useFetch.propTypes = {
    id: propTypes.number.isRequired,
    url: propTypes.string.isRequired
};


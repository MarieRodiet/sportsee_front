import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import formatData from '../Formater';

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
                let formatedData = formatData(actualData.data)
                console.log(formatedData)
                actualData === "can not get user" ? setError(true) : setData(formatedData);
            })
            .catch((err) => {
                console.log(err.message);
                setError(true)
            })
            .finally(() => setLoading(false))
    }, [id])
    return { data, isLoading, hasError }
}
export default useFetch

useFetch.propTypes = {
    id: propTypes.number.isRequired,
    url: propTypes.string.isRequired
};


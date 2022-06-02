import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
/**
 * design pattern facade pour faire des
 * requetes avec a la fois le local
 * et le backend
 */
//MOCKED DATA
//fetch(`/data/data-user${id}.json`, {
//LOCAL SERVER DATA
// fetch(`http://localhost:3000/user/${id}`)

function useFetch(id) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)
    const mockedDataUrl = `/data/data-user${id}.json`;
    const localServerUrl = `http://localhost:3000/user/${id}`;

    useEffect(() => {
        setLoading(true);
        fetch(localServerUrl, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((actualData) => {
                console.log(actualData);
                actualData === "can not get user" ? setError(true) : setData(actualData.data);
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
};


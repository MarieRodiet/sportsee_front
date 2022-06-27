import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} url - come from getRightUrl() so either "http:localhost:3000/user" OR "data/user/"
 * @param {string} dataKind - "" OR "performance" OR "activity" OR "average-sessions"
 * @param {number} id - 12 OR 18 for userId
 * @returns object {data, isLoading, hasError}
 */
export default function useFetch(url, dataKind, id) {
    let toFetch = getUrl(url, dataKind, id)
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)
    useEffect(() => {
        setLoading(true);
        fetch(toFetch, {
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
    }, [toFetch])
    return { data, isLoading, hasError }
}

function getUrl(url, dataKind, id) {
    if (url.includes('http://localhost')) {
        return dataKind === "" ? url + id : url + id + "/" + dataKind;
    } else {
        return dataKind === "" ? url + id + ".json" : url + id + "/" + dataKind + ".json";
    }
}

useFetch.propTypes = {
    url: PropTypes.string.isRequired
};

getUrl.propTypes = {
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    dataKind: PropTypes.string.isRequired
}



import { useState, useEffect } from 'react';
import propTypes from 'prop-types';

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
    }, [])
    return { data, isLoading, hasError }
}

useFetch.propTypes = {
    url: propTypes.string.isRequired
};

function getUrl(url, dataKind, id) {
    if (url.includes('http://localhost')) {
        return dataKind === "" ? url + id : url + id + "/" + dataKind;
    } else {
        return dataKind === "" ? url + id + ".json" : url + id + "/" + dataKind + ".json";
    }
}



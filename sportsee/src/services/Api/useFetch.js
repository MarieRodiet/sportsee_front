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
    console.log(url)
    console.log(dataKind)
    //http://localhost:3000/user/id/datakind
    let toFetch = "";
    if (url.includes('http://localhost')) {
        switch (dataKind) {
            case "": {
                toFetch = "";
            }
                break;
            case "activity": {
                toFetch = "/activity";
            }
                break;
            case "average": {
                toFetch = "/average-sessions";
            }
                break;
            case "performance": {
                toFetch = "/performance";
            }
                break;
            default:
        }
    } else {
        switch (dataKind) {
            case "": {
                toFetch = ".json";
            }
                break;
            case "activity": {
                toFetch = "/activity.json";
            }
                break;
            case "average": {
                toFetch = "/average.json";
            }
                break;
            case "performance": {
                toFetch = "/performance.json";
            }
                break;
            default: return ""
        }
    }
    return url + id + toFetch;
}



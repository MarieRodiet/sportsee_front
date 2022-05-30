import { useState, useEffect } from 'react'
/**
 * design pattern facade pour faire des
 * requetes avec a la fois le local
 * et le backend
 */

//add propTypes saying that function fetchData has to have a required number as its parameter
function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                //console.log(actualData);
                setData(actualData)
            })
            .catch((err) => {
                //console.log(err.message);
                setError(true)
            })
            .finally(() => setLoading(false))
    }, [url])
    return { data, isLoading, hasError }
}
export default useFetch

import PropTypes from 'prop-types';

/**
 * 
 * @param {array} data - data coming from useFetch on server
 * @returns an array of formatedObject which day property is modified with first letter of week names
 */
export default function formatAverage(data) {
    const days = [
        'L',
        'M',
        'M',
        'J',
        'V',
        'S',
        'D'
    ]

    function formatObject(obj) {
        let nb = obj["day"]
        let letter = days[(nb - 1)]
        return { ...obj, day: letter }
    }
    return data.map((element) => formatObject(element))
}

formatAverage.propTypes = {
    data: PropTypes.array.isRequired
}
import propTypes from 'prop-types';

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
    data:propTypes.array.isRequired
}
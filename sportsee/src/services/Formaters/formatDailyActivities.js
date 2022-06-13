import propTypes from 'prop-types';

/**
 * 
 * @param {array} sessions - data coming from useFetch on server
 * @returns formated array of objects with a date property modified
 */
export default function formatDailyActivity(sessions) {
    function format(object) {
        let date = new Date(object["day"])
        let formated = { ...object, day: date.getDate() }
        return formated
    }
    return sessions.map(element => format(element))
}

formatDailyActivity.propTypes = {
    sessions: propTypes.array.isRequired
}
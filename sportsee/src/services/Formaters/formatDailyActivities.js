import propTypes from 'prop-types';
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
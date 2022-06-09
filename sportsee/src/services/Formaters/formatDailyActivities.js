export default function formatDailyActivity(sessions) {

    function format(object) {
        let date = new Date(object["day"])
        let formated = { ...object, day: date.getDate() }
        return formated
    }

    let formated = sessions.map(element => format(element))
    return formated;
}